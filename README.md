# 리액트 입문주차 개인과제

```
리액트 입문주차 개인과제입니다.
페이지에 입장하고 나라명, 각 메달 개수를 입력하여 데이터를 추가할 수 있습니다.
```

##
-   Javascript
-   React

## 프로젝트 구조

![image](https://github.com/user-attachments/assets/8eaaba48-e3e3-427e-969f-559835f7df64)<br/>
- 먼저 App에는 화면에 현재 보여지는 CountryContainer 컴포넌트만 들어있다. 기능 확장을 고려하여 App.js에 컴포넌트들을 불러오지 않고 CountryContainer에서 정리해서 가져오는 방식으로 진행하였다.


![image](https://github.com/user-attachments/assets/4571aac3-18a1-4e48-b9a6-530546e4b939)<br/>
- CountryContainer 컴포넌트는 크게 3가지 구조로 나뉜다.
- 박스의 제목을 보여주는 Title컴포넌트, 입력칸과 버튼을 가진 InputForm컴포넌트, 데이터를 표 형식으로 보여주는 MedalListBox 컴포넌트 이 세가지이다.
- Title컴포넌트는 코드를 깔끔하게 만들기위해 분리하였고, 따로 재사용성이나 기능은 없다.

![image](https://github.com/user-attachments/assets/d970fea1-19a9-4bd3-8be3-b3223a8c7f48)<br/>
- InputForm컴포넌트는 4가지 input/label과 두개의 버튼을 보유하고 있다.
- 네가지 모두 기존에 만들어 둔 FORM_LIST_INPUT상수의 값에따라 InputFormItem컴포넌트로 만들어진다.
- CountryInput과 MedalInput컴포넌트는 같은 Input컴포넌트를 사용한다. 
![image](https://github.com/user-attachments/assets/e36997ea-2047-45b7-b6c3-4ebcb07593a9)<br/>
- 두가지 버튼도 같은 Button컴포넌트를 재사용하여 만들었다.
![image](https://github.com/user-attachments/assets/92239c51-f359-421a-90c8-4c4fdeea1268)<br/>

![Group 58](https://github.com/user-attachments/assets/68567431-486b-44ae-a7aa-be4404adaa92)<br/>
- 마지막으로 MedalListBox컴포넌트는 테이블헤더와 테이블바디부분으로 구분된다.
- 테이블 헤더부분은 정적인 데이터를 map을 사용하여 요소로 만들어주었고, 테이블바디부분은 데이터를 가공하고 map을 사용하여 요소로 만들어주었다.
- 테이블바디 내부의 각 요소들은 버튼을 가지며 이때 버튼 또한 Button컴포넌트를 재사용한다.

## 실행 방법
- 페이지 진입 후 국가명과 알맞은 메달수를 입력하고 국가 추가를 누르면 테이블에 추가된다.
- 원하는만큼 국가명과 메달데이터를 넣어 추가하면된다. 단, 중복되는 국가명은 존재할 수 없다.
- 추가한 국가의 메달수를 업데이트하고 싶을땐 해당 국가명을 입력하고 메달수를 조정하여 업데이트 버튼을 누르면 업데이트 된다. 마찬가지로 국가명을 입력해야하며, 이미 존재하는 국가명을 입력해야 업데이트가 가능하다.

## 주요 기능
- 데이터 추가, 삭제, 수정 기능이 존재하며, 페이지 진입 시 로컬스토리지에서 데이터를 가져와 기존 데이터를 사용자에게 보여준다.
- 국가명을 입력하지 않거나, 기능에 적합하지 않게 사용할 때에는 모달창을 이용하여 사용자에게 오류메시지를 보여준다.

## 트러블슈팅
- 문제1
```
로컬스토리지에 데이터를 저장하고 useEffect안에서 해당 데이터를 가져오는 작업 중 생긴 문제
- 데이터 삭제 시 마지막 한 데이터가 삭제되지 않음

=> useEffect에서 total을 의존성 배열으로 사용하고, localStorage.setItem은 total.length>0일때 진행되어 total에선 삭제되었으나 로컬스토리지에 저장돼 페이지에도 남아있고, 새로고침을 하더라도 데이터가 삭제되지 않음

==> useEffect의 페이지가 로드된 후 실행되는 기능을 제거한 useDidMountedEffect 커스텀 훅을 만들어 사용함.

===> bool값을 useRef를 이용해 만들고, useDidMountedEffect안에서 해당 ref값이 true일 때 함수를 실행, false일 때 ref를 true로 바꾸는 작업을 통해 페이지가 로드될때 / 의존성배열이 바뀔 때를 나누어 해결 
```

- 문제2
```javascript
//수정 전
useEffect(() => {
    const countries = JSON.parse(localStorage.getItem("countries"));
    setTotal(countries);
}, []);
```
```
배포시 localStorage에 빈 배열조차 없어 null관련 오류 발생
=> countries라는 키값을 가진 데이터가 있을 경우에만 관련 작업 하도록 변경함
```
```javascript
//수정 후
useEffect(() => {
    if (localStorage.getItem("countries")) {
        const countries = JSON.parse(localStorage.getItem("countries"));
        setTotal(countries);
    }
}, []);
```