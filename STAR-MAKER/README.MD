# canvas API
- JavsScript 로 그래픽을 그릴 수 있게 해 주는 아주 멋진 API입니다.
- WebGL API로 2D 그래픽이나 3D 그래픽을 그릴 수 있습니다.
- canvas 기준에서 x, y, width, height 의 값을 받음.
# rect(), fill(), stroke()
- rect() 함수는 선의 위치를 잡는다.
- fill() 함수는 색을 채워 넣는다.
- stroke() 함수는 선을 만들어 준다.
- fillRect() 는 직사각형이 색으로 채워지고, strokeRect() 를 쓰면 선만 생김.
# fillStyle, strokeStyle
- 선과 색을 지정해 줄 수 있다.
- ex) fillStyle = "pink";
# beginPath()
- 기존 경로를 해제하고 새로운 경로를 만들고 싶을 때 사용한다.
# arc()
- 원을 그릴 수 있도록 해 주는 메소드
- arc(x,y,반지름,시작 각도 , 끝 각도 , 방향 설정)