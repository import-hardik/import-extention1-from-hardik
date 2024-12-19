// Your custom script
console.log("Custom script running on this website!");
try{
    window.open(document.getElementsByClassName("wpdm-download-link download-on-click btn btn-primary btn-lg")[0].dataset.downloadurl, '_self');
    window.close();
}
catch{
    console.log("do nothing");
}

// get image link of all url
// document.getElementsByClassName("wpdm-download-link download-on-click btn btn-primary btn-lg")

// get all car image
// document.getElementsByClassName("qodef-e-media-image")[0-36].firstElementChild.href






// window.open(document.getElementsByClassName("qodef-e-media-image")[0].firstElementChild.href, '_blank');


// window.open(document.getElementsByClassName("wpdm-download-link download-on-click btn btn-primary btn-lg")[0].dataset.downloadurl, '_blank');


// for(let i=0;i<=document.getElementsByClassName("qodef-e-media-image").length;i++){
//     let c=window.open(document.getElementsByClassName("qodef-e-media-image")[i].firstElementChild.href, '_blank');
// setTimeout(() => {
//     c.close();
// }, 2000);
// }