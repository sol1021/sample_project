var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
var container = document.getElementById("map");
const addr = document.querySelector(".address");
const modal = document.querySelector(".openBtn");

var options = {
  center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
  level: 12, //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options);
var ps = new kakao.maps.services.Places();

// 키워드로 장소를 검색합니다
ps.keywordSearch("제주도 둘레길", placesSearchCB);

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

// 지도에 마커를 표시
function displayMarker(place) {
  var marker = new kakao.maps.Marker({
    map: map,
    position: new kakao.maps.LatLng(place.y, place.x),
    image: markerImage,
  });

  kakao.maps.event.addListener(marker, "click", function () {
    infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + "</div>");
    infowindow.open(map, marker);
    addr.innerText = place.place_name;
    onGeoOk(place);
    modal.classList.remove("hidden");
  });
}

//날씨 api
const API_KEY = "4b9f4e1738c30bd5406c5895a6548cd9";

function onGeoOk(position) {
  const lat = position.y;
  const lng = position.x;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
