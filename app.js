let date = prompt("Ayin tarixini YYYY.MM.DD sheklinde daxil edin!")
let year = date.substring(0,4);
let month = date.substring(5,7);
let day = date.substring(8,10);
switch (month) {
    case "1":
   case "01":
    console.log(day + " " + "Yanvar" + " " + year + "-cu il" );
    break;
   case "2":
   case "02":
    console.log(day + " " + "Fevral" + " " + year + "-cu il");
    break;
   case "3":
   case "03":
    console.log(day + " " + "Mart" + " " + year + "-cu il");
    break;
   case "4":
   case "04":
    console.log(day + " " + "Aprel" + " " + year + "-cu il");
    break;
   case "5":
   case "05":
    console.log(day + " " + "May" + " " + year + "-cu il");
    break;
   case "6":
   case "06":
    console.log(day + " " + "Iyun" + " " + year + "-cu il");
    break;
   case "7":
   case "07":
    console.log(day + " " + "Iyul" + " " + year + "-cu il");
    break;
   case "8":
   case "08":
    console.log(day + " " + "Avqust" + " " + year + "-cu il");
    break;
   case "9":
   case "09":
    console.log(day + " " + "Sentyabr" + " " + year + "-cu il");
    break;
   case "10":
    console.log(day + " " + "Oktyabr" + " " + year + "-cu il");
    break;
   case "11":
    console.log(day + " " + "Noyabr" + " " + year + "-cu il");
    break;
   case "12":
    console.log(day + " " + "Dekabr" + " " + year + "-cu il");
    break;
    default:
        console.log("Tarixi teleb edilen sekilde yazdiginizdan emin olun");
        break;
        
}
