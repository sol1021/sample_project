var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
var container = document.getElementById("map");
var options = {
  //지도를 생성할 때 필요한 기본 옵션
  center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
  level: 12, //지도의 레벨(확대, 축소 정도)
};
const addr = document.querySelector(".address");

var map = new kakao.maps.Map(container, options);
/*
// 지도를 클릭한 위치에 표출할 마커입니다
var marker = new kakao.maps.Marker({
  // 지도 중심좌표에 마커를 생성합니다
  position: map.getCenter(),
});
// 지도에 마커를 표시합니다
marker.setMap(map);

// 지도에 클릭 이벤트를 등록합니다
// 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
kakao.maps.event.addListener(map, "click", function (mouseEvent) {
  // 클릭한 위도, 경도 정보를 가져옵니다
  var latlng = mouseEvent.latLng;

  // 마커 위치를 클릭한 위치로 옮깁니다
  marker.setPosition(latlng);
});

var geocoder = new kakao.maps.services.Geocoder();

 주소로 좌표를 검색합니다
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
});*/

// 장소 검색 객체를 생성합니다

var ps = new kakao.maps.services.Places();

// 키워드로 장소를 검색합니다
ps.keywordSearch("제주도 둘레길", placesSearchCB);

// 키워드 검색 완료 시 호출되는 콜백함수 입니다
function placesSearchCB(data, status, pagination) {
  if (status === kakao.maps.services.Status.OK) {
    // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
    // LatLngBounds 객체에 좌표를 추가합니다
    var bounds = new kakao.maps.LatLngBounds();

    for (var i = 0; i < data.length; i++) {
      displayMarker(data[i]);
      bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
    }

    // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
    map.setBounds(bounds);
  }
}

var imageSrc = "../img/pin.png", // 마커이미지의 주소입니다
  imageSize = new kakao.maps.Size(40, 40); // 마커이미지의 크기입니다

var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

// 지도에 마커를 표시하는 함수입니다
function displayMarker(place) {
  // 마커를 생성하고 지도에 표시합니다
  var marker = new kakao.maps.Marker({
    map: map,
    position: new kakao.maps.LatLng(place.y, place.x),
    image: markerImage,
  });

  // 마커에 클릭이벤트를 등록합니다
  kakao.maps.event.addListener(marker, "click", function () {
    // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
    infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + "</div>");
    infowindow.open(map, marker);
    addr.innerText = place.place_name + "y = " + place.y + "x = " + place.x;
  });
}
