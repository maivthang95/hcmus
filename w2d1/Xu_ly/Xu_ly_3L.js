//************** Xử lý Lưu trữ ***********
let file_directory = "../Du_lieu_Luu_tru";

let readFile = (fileName) => {
  let xmlHTTPReq = new XMLHttpRequest();
  xmlHTTPReq.open("GET" , `${file_directory}/${fileName}` , false );
  xmlHTTPReq.send();
  let content = xmlHTTPReq.responseText ; 
  return content ; 
}









