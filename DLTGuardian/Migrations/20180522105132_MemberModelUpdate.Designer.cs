﻿// <auto-generated />
using DLTGuardian.Database;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using System;

namespace DLTGuardian.Migrations
{
    [DbContext(typeof(DBEntities))]
    [Migration("20180522105132_MemberModelUpdate")]
    partial class MemberModelUpdate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn)
                .HasAnnotation("ProductVersion", "2.0.3-rtm-10026");

            modelBuilder.Entity("DLTGuardian.Database.Entities.Member", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("AccountAddress")
                        .IsRequired()
                        .HasMaxLength(100);

                    b.Property<bool>("IsActive");

                    b.Property<string>("OrganizationDescription");

                    b.Property<string>("OrganizationName")
                        .HasMaxLength(400);

                    b.Property<string>("OrganizationWebsite")
                        .HasMaxLength(400);

                    b.HasKey("Id");

                    b.ToTable("Members");
                });
#pragma warning restore 612, 618
        }
    }
}
