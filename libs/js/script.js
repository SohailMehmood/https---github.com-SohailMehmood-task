$('#firstRun').click(function() {

    $.ajax({
        url: "libs/php/findNearbyPostalCodes.php",
        type: 'POST',
        dataType: 'json',
        data: {
            postalcode: $('#firstPostalcode').val(),
            country: $('#firstCountry').val()
        },
        success: function(result) {

            console.log(JSON.stringify(result));

            $('#txtCity').empty().html(result['data'][1]['placeName']);
            $('#txtState').empty().html(result['data'][1]['adminName2']);
            $('#txtCountry').empty().html(result['data'][1]['adminName1']);
            $('#txtPostcode').empty().html(result['data'][1]['postalCode']);

        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // your error code
            console.log("you have made an error ");

        }
    }); 

});

$('#secondRun').click(function() {

    $.ajax({
        url: "libs/php/postalCodeSearch.php",
        type: 'POST',
        dataType: 'json',
        data: {
            postalcode: $('#secondPostalcode').val(),
            country: $('#secondCountry').val()
        },
        success: function(result) {

            console.log(JSON.stringify(result));

            $('#txtCity').empty().html(result['data'][0]['placeName']);
            $('#txtState').empty().html(result['data'][0]['adminName2']);
            $('#txtCountry').empty().html(result['data'][0]['adminName1']);
            $('#txtPostcode').empty().html(result['data'][0]['postalCode']);

        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // your error code
            console.log("you have made an error ");

        }
    }); 

});

$('#thirdRun').click(function() {

    $.ajax({
        url: "libs/php/placenameLookupPostcode.php",
        type: 'POST',
        dataType: 'json',
        data: {
            postalcode: $('#thirdPostalcode').val(),
            country: $('#thirdCountry').val()
        },
        success: function(result) {

            console.log(JSON.stringify(result));

            $('#txtCity').empty().html(result['data'][0]['placeName']);
            $('#txtState').empty().html(result['data'][0]['adminName2']);
            $('#txtCountry').empty().html(result['data'][0]['adminName1']);
            $('#txtPostcode').empty().html(result['data'][0]['postalCode']);

        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // your error code
            console.log("you have made an error ");

        }
    }); 

});