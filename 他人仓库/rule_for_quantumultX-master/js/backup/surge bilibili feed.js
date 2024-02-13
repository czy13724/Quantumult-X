let body = $response.body
body=JSON.parse(body)
body['data']['items'].forEach((element, index)=> {
   if(element.hasOwnProperty('ad_info')||element.hasOwnProperty('banner_item')||element['card_type']!='small_cover_v2'){ 
         body['data']['items'].splice(index,1)  
    }
})
body=JSON.stringify(body)
$done({body})
















// Adding a dummy plugin commit(7)
// Adding a dummy stoverride commit(4)
// Adding a dummy sgmodule commit(10)
