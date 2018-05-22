using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DLTGuardian.Database;
using DLTGuardian.Database.Entities;
using DLTGuardian.Models;

namespace DLTGuardian.Controllers
{
    [Produces("application/json")]
    public class ApiController : Controller
    {
        private readonly DBEntities _context;

        public ApiController(DBEntities context)
        {
            _context = context;
        }
        
        [HttpGet]
        [Route("api/Members")]
        public IEnumerable<Member> GetMembers()
        {
            return _context.Members;
        }

        [HttpPost]
        [Route("api/CreateOrganisation")]
        public async Task<IActionResult> CreateOrganisation([FromBody] CreateOrganizationModel model)
        {
            if (!ModelState.IsValid) {
                return BadRequest(ModelState);
            }

            if (MemberExists(model.AccountAddress)) {
                return BadRequest("Member already exists");
            }

            Member member = new Member() {
                AccountAddress = model.AccountAddress,
                OrganizationDescription = model.OrganizationDescription,
                OrganizationName = model.OrganizationName,
                OrganizationWebsite = model.OrganizationWebsite,
                IsActive = true
            };

            _context.Members.Add(member);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMember", new { id = member.Id }, member);
        }

        [HttpPost]
        [Route("api/DeactivateOrganisation")]
        public async Task<IActionResult> DeactivateOrganisation([FromBody] DeactivateOrganisationModel model)
        {
            if (!ModelState.IsValid) {
                return BadRequest(ModelState);
            }

            if (!MemberExists(model.AccountAddress)) {
                return NotFound();
            }

            Member member = _context.Members.Single(m => m.AccountAddress == model.AccountAddress);
            member.IsActive = false;

            await _context.SaveChangesAsync();

            return Ok();
        }

        [HttpPost]
        [Route("api/ReactivateOrganisation")]
        public async Task<IActionResult> ReactivateOrganisation([FromBody] ReactivateOrganisationModel model)
        {
            if (!ModelState.IsValid) {
                return BadRequest(ModelState);
            }

            if (!MemberExists(model.AccountAddress)) {
                return NotFound();
            }

            Member member = _context.Members.Single(m => m.AccountAddress == model.AccountAddress);
            member.IsActive = true;

            await _context.SaveChangesAsync();

            return Ok();
        }

        [HttpPost]
        [Route("api/ChangeURL")]
        public async Task<IActionResult> ChangeURL([FromBody] ChangeURLModel model)
        {
            if (!ModelState.IsValid) {
                return BadRequest(ModelState);
            }

            if (!MemberExists(model.AccountAddress)) {
                return NotFound();
            }

            Member member = _context.Members.Single(m => m.AccountAddress == model.AccountAddress);
            member.OrganizationWebsite = model.OrganizationWebsite;

            await _context.SaveChangesAsync();

            return Ok();
        }

        [HttpPost]
        [Route("api/ChangeDescription")]
        public async Task<IActionResult> ChangeDescription([FromBody] ChangeDescriptionModel model)
        {
            if (!ModelState.IsValid) {
                return BadRequest(ModelState);
            }

            if (!MemberExists(model.AccountAddress)) {
                return NotFound();
            }

            Member member = _context.Members.Single(m => m.AccountAddress == model.AccountAddress);
            member.OrganizationDescription = model.OrganizationDescription;

            await _context.SaveChangesAsync();

            return Ok();
        }

        private bool MemberExists(string address)
        {
            return _context.Members.Any(e => e.AccountAddress == address);
        }
    }
}