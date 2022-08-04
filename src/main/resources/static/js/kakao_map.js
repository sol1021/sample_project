var container = document.getElementById("map");
var options = {
  //지도를 생성할 때 필요한 기본 옵션
  center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
  level: 10, //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options);
