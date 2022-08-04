var container = document.getElementById("map");
var options = {
  //지도를 생성할 때 필요한 기본 옵션
  center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
  level: 10, //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options);

//좌표를 주소로 출력
let lat = 37.5566803113882;
let lng = 126.904501286522;
getAddr(lat, lng);
function getAddr(lat, lng) {
  let geocoder = new kakao.maps.services.Geocoder();

  let coord = new kakao.maps.LatLng(lat, lng);
  let callback = function (result, status) {
    if (status === kakao.maps.services.Status.OK) {
      console.log(result[0].road_address.address_name);
    }
  };
  geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
}

var geocoder = new kakao.maps.services.Geocoder();

// 주소로 좌표를 검색합니다
geocoder.addressSearch("제주특별자치도 제주시 첨단로 242", function (result, status) {
  // 정상적으로 검색이 완료됐으면
  if (status === kakao.maps.services.Status.OK) {
    var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

    // 결과값으로 받은 위치를 마커로 표시합니다
    var marker = new kakao.maps.Marker({
      map: map,
      position: coords,
    });

    // 인포윈도우로 장소에 대한 설명을 표시합니다
    var infowindow = new kakao.maps.InfoWindow({
      content: '<div style="width:150px;text-align:center;padding:6px 0;">우리회사</div>',
    });
    infowindow.open(map, marker);

    // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
    map.setCenter(coords);
  }
});
