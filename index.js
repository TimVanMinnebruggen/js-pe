function validateForm()
{
   checkEmptyField()
   validateEmail()
   checkPC()
   validatePayment()

   // verbergen van elementen
   //https://www.w3schools.com/jsref/prop_style_display.asp
   
   if (document.getElementById("paragraphAlert").innerHTML=="")
       
    {
        document.getElementById("alert1").style.display="none";
        document.getElementById("alert2").style.display="block";
        document.getElementById("headerAlert3").innerHTML="Goed gedaan!";
        document.getElementById("paragraphAlert3").innerHTML="Aww yeah, je werd geregistreerd.";
        document.getElementById("alert3").style.display="block";   
    }
    else
    {
        document.getElementById("alert2").style.display="none";
        document.getElementById("alert3").style.display="none";
    }

    
}

        // Controle van de tekstvelden op een lege waarde
function checkEmptyField()
{
    let veld = "";
    let melding = "Gelieve een voornaam in te geven";
    let errors = [];

    veld = document.getElementById("voornaam").value;
    if (veld == "Uw voornaam" || veld == "" || !isNaN(veld)) 
    {
       errors.push(melding);
    }

    veld = document.getElementById("naam").value;
    melding = "<br/>"+"Gelieve een achternaam in te geven";

    if (veld == "Uw naam" || veld == "" || !isNaN(veld))
    {
       errors.push(melding);
    }


    veld = document.getElementById("gebruikersnaam").value;
    melding = "<br/>"+"Gelieve een gebruikersnaam in te geven";
    if (veld == "u911236" || veld == "")
    {
        errors.push(melding);
    }

    veld = document.getElementById("email").value;
    melding = "<br/>"+"Gelieve een e-mailadres in te geven";
    if (veld == "mail@example.be" || veld == "")
    {
        errors.push(melding);
    }

    veld = document.getElementById("wachtwoord1").value;
    melding = "<br/>"+"Gelieve een wachtwoord in te geven";
    if ( veld == "" )
    {
        errors.push(melding);
    }

    veld = document.getElementById("wachtwoord2").value;
    melding = "<br/>"+"Gelieve uw wachtwoord te herhalen";
    if (veld == "" )
    {
        errors.push(melding);
    }
    else if ((document.getElementById("wachtwoord1").value) !== (document.getElementById("wachtwoord2").value))
    {
        melding = "<br/>"+"Uw wachtwoorden zijn niet gelijk";
        errors.push(melding);
    }
    
        //controle van de lengte van de wachtwoorden
        //https://www.w3schools.com/jsref/jsref_length_string.asp

    else if ((document.getElementById("wachtwoord1").value).length <= 7 || (document.getElementById("wachtwoord2").value).length <= 7)
    {
        melding = "<br/>"+"Uw wachtwoord moet minstens 8 karakters lang zijn";
        errors.push(melding);
    }
    
    veld = document.getElementById("adres").value;
    melding = "</br>"+ "Gelieve een adres in te geven";
    if (veld == "" || veld == "Uw adres en huisnummer")
    {
        errors.push(melding);
    }

    veld = document.getElementById("land").value;
    melding = "</br>"+ "Gelieve een land te kiezen";
    if (veld == "---" || veld == "Kies een land")
    {
        errors.push(melding);
    }

    veld = document.getElementById("provincie").value;
    melding = "</br>"+ "Gelieve een provincie te kiezen";
    if (veld == "---" || veld == "Kies een provincie")
    {
        errors.push(melding);
    }

        //toevoegen van de fout bij controle van het e-mail adres aan de array errors.
    if ( validateEmail() == false )
    {
        melding ="</br>" + "Uw E-mailadres is niet correct";
        errors.push(melding);
    }

        //toevoegen van de fouten aan de array errors bij controle vd postcode.    
    if ( checkPC()=="alert1")
    {
        melding ="</br>"+"Het veld postcode is vereist";
        errors.push(melding);
    }
    else if ( checkPC()=="alert2")
    {
        melding = "</br>"+"Het veld postcode moet tussen 1000 en 9999 liggen";
        errors.push(melding);
    }

        //controle van het aanvaarden van de algemene voorwaarden
    if (document.getElementById("cbvoorwaarden").checked==false)
    {
        melding = "</br>" + "Gelieve de algemene voorwaarden te aanvaarden";
        errors.push(melding);
    }

    document.getElementById("headerAlert").innerHTML = "Yikes, errors.."
    document.getElementById("paragraphAlert").innerHTML = errors;

    
}
        //Controle van E-mail adres op een geldige waarde
function validateEmail() 
{
        // bron: https://www.codeproject.com/Tips/492632/Email-Validation-in-JavaScript
        // bron: https://www.w3resource.com/javascript/form/email-validation.php

          if (/^([a-zA-Z0-9_])+([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9])+([a-zA-Z0-9\.\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(document.getElementById("email").value))
        {
            return (true)
        }
         else
        {
            return (false)
        }
}   

function checkPC()
{
    veld = document.getElementById("postcode").value;
    
    if (veld == "")
    { 
        return "alert1";
    }
        // controle van een numerieke waarde vd postcode:
        //https://www.w3schools.com/jsref/jsref_isnan.asp

    else if (veld<1000||veld>9999||isNaN(veld))
    {
        return "alert2";
    }
}

function validatePayment()
    {
        let veld=""
        if (document.getElementById("rbBankingapp").checked==true)
        { veld ="Banking app";}
        else if (document.getElementById("rbOverschrijving").checked==true)
        { veld ="Overschrijving";}
        else if (document.getElementById("rbVisa").checked==true)
        { veld ="Visa";}
        else
        { veld ="Paypall";}

        
        document.getElementById("headerAlert2").innerHTML="Betalingswijze";
        document.getElementById("paragraphAlert2").innerHTML="Je betalingwijze is " + veld;
        
    }
