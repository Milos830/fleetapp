$('document').ready(function () {
    $('table #editButton').on('click', function (event) {
         event.preventDefault();

        // trying to hit url   /locations/findById/?id=1
        var href = $(this).attr('href');

        $.get(href, function (employee, status) {
            $('#ddltitleEdit').val(employee.title);
            $('#initialsEdit').val(employee.initials);
            $('#ssnEdit').val(employee.socialSecurityNumber);
            $('#firstNameEdit').val(employee.firstName);
            $('#lastNameEdit').val(employee.lastName);
            $('#otherNameEdit').val(employee.otherName);
            $('#ddlgenderEdit').val(employee.gender);
            $('#ddlCountryEdit').val(employee.countryid);
            $('#AddressEdit').val(employee.address);

            $('#dateOfBirthEdit').val(employee.dateOfBirth.substr(0,10));
            $('#hireDateEdit').val(employee.hireDate.substr(0,10));

            $('#ddlStateEdit').val(employee.stateid);
            $('#CityEdit').val(employee.city);
            $('#phoneEdit').val(employee.phone);
            $('#mobileEdit').val(employee.mobile);
            $('#maritalStatusEdit').val(employee.maritalStatus);
            $('#emailEdit').val(employee.email);
            $('#jobTitleEdit').val(employee.jobtitleid);
            $('#employeeTypeEdit').val(employee.employeetypeid);

        });

        $('#editModal').modal();
    });

        $('table #detailsButton').on('click', function (event) {
            event.preventDefault();

            var href = $(this).attr('href');
            $.get(href, function (employee, status) {
                $('#idDetails').val(employee.id);
                $('#titleDetails').val(employee.title);
                $('#initialsDetails').val(employee.initials);
                $('#ssnDetails').val(employee.socialSecurityNumber);
                $('#firstNameDetails').val(employee.firstName);
                $('#lastNameDetails').val(employee.lastName);
                $('#otherNameDetails').val(employee.otherName);
                $('#genderDetails').val(employee.gender);
                $('#nationalityDetails').val(employee.country.description);
                $('#addressDetails').val(employee.address);

                $('#dateOfBirthDetails').val(employee.dateOfBirth.substr(0,10));
                $('#hireDateDetails').val(employee.hireDate.substr(0,10));

                $('#stateDetails').val(employee.state.name);
                $('#cityDetails').val(employee.city);
                $('#phoneDetails').val(employee.phone);
                $('#mobileDetails').val(employee.mobile);
                $('#maritalStatusDetails').val(employee.maritalStatus);
                $('#emailDetails').val(employee.email);
                $('#jobTitleDetails').val(employee.jobtitleid.description);
                $('#employeeTypeDetails').val(employee.employeetype.description);
                $('#lastModifiedByDetails').val(employee.lastModifiedBy);
                $('#lastModifiedDateDetails').val(employee.lastModifiedDate.substr(0,19).replace("T", " "));
            });
            $('#detailsModal').modal();
        });


    $('.table #deleteButton').on('click', function (event) {
        event.preventDefault();

        var href = $(this).attr('href');
        $('#confirmDeleteButton').attr('href', href);

        $('#deleteModal').modal();
    });


});