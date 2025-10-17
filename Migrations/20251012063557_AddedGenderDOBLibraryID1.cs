using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AuthECAPI2.Migrations
{
    /// <inheritdoc />
    public partial class AddedGenderDOBLibraryID1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "DOB",
                table: "AspNetUsers",
                type: "nvarchar(150)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Gender",
                table: "AspNetUsers",
                type: "nvarchar(150)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "LibraryID",
                table: "AspNetUsers",
                type: "nvarchar(150)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DOB",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Gender",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "LibraryID",
                table: "AspNetUsers");
        }
    }
}
