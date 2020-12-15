
# coco-coin

## 2020-12-02
> yarn add global @storybook/cli

글로벌로 storybook-cli를 설치합니다. 이것을 이용하면 복잡한 설정이나 설치해야할 것을 자동으로 해줍니다.
[참고][https://velog.io/@wlsdud2194/Storybook-%EC%9E%91%EC%84%B1%ED%95%98%EA%B8%B0-2]

## 2020-12-07
스토리북 설치 
03/ 폴더 생성
스토리북 확장 도구 설치
addon-actions, addon-jsx

```
yarn add --dev @storybook/addons @storybook/addon-actions
```
addon-actions 설정 추가하기

## 2020-12-08
css 컴포넌트 스타일 적용
머터리얼 디자인 (Material Design) -> 구글에서 공개한 디자인 가이드

이건 넘어갈래 ㅇㅅaㅇ

#### 스타일 컴포넌트 만들기

**컴포넌트 개발법(CSS-in-JS)**
긴 클래스 이름을 짧게 변환해 준다.

```react-with-styles```

에어비앤비에서 공개한 스타일 컴포넌트, 자바스크립트에 친화적
서버 출력 라이브러리와  스타일 클래스 압축 지원  -> 우수한 성능 자랑

```
yarn add react-with-styles aphrodite react-with-styles-interface-aphrodite
```

아프로디테(aphrodite) : 서버 출력을 도와주는 라이브러리

서버 출력이란?
자바스크립트로 스타일을 적용하면 화면이 모두 출력된 이후 자바스크립트 엔진이 동작하며 적용하게 되므로 스타일 적용 시 시간 간격이 생김
시간 간격을 줄이려면 **화면 출력을 시작하는 순간에 스타일 코드를 서버에 생성하여 같이 출력**

## 2020-12-09

withStyles() 함수
흑흑 버튼 만들었다... 흑흑


## 2020-12-12

반응형으로 스타일 구성하기 

### 테스트 위주 개발 방법 (TDD)
(Test-Driven Development)
-> 팀원과 협업 작업 시 내가 작성한 코드를 다른 사람이 수정했을 때 '원래 기능이 고장 나지 않게' 보호 ?

#### 리액트 기본 테스트 환경 jest 도구 사용

```
"test": "react-script test",
```

#### enzyme 라이브러리

**컴포넌트의 기능만을 손쉽게 검사해주는 도구**

```
yarn add --dev enzyme enzyme-adapter-react-16.3 react-test-renderer
```

> enzyme-adapter-react-16.3 : 리액트 16.3 버전부터 지원하는 생명주기 함수를 위한 것
react-test-renderer: docuent.createELement() 함수없이 컴포넌트를 생성할 수 있게 도와줍니다.

[enzyme] shallow(): 컴포넌트의 자식 컴포넌트를 생성하거나 출력하는 과정을 건너뛰고 현재 컴포넌트의 생명주기만 테스트
[jest] toThrow(): 컴포넌트의 출력 오류 검사
[jest] expect(): 특정 변수를 비교하거나 함수를 실행하여 발생한 결괏값을 검증
spyOn()
beforeEach()
afterEach()
->각 테스트 코드가 실행되기 이전과 이후에 특정 설정을 추가하고 변경된 설정을 초기화하기 위해 실행되는 함수

## 2020-12-13

enzyme 넘어간다 히히

## 2020-12-15

### 하이어오더 컴포넌트 

#### 커링

커링 : 반환값이 함수인 디자인 패턴
       장점: **중복된 코드를 반복적으로 입력하지 않고 원하는 기능을 조합하여 적재적소에 사용할 수 있다.**

**함수를 반환하는 함수**
**함수의 재활용**
**인자를 나눠 받아 실행할 수 있다**

```
// => ((x * a) * b) + c
// a = 2, b = 3, c = 4
const equation = (a, b, c) => x => ((x * a) * b) + c;
const formula =  equation(2, 3, 4);
const x = 10;
const result = formula(x);
```
equation() <- 커링 함수

[유튜브 강의][https://www.youtube.com/watch?v=VEAUpHod4cg]

**상속**

## 2020-12-15

**reduce()** : 배열을 원하는 형태로 변경하는 것이 목적!

{} : 객체 
[] : 배열


**compose()** -> 하이오더 함수 / 증가 함수

```
[multiplyTwo, multiplyThree, multiplyFour, addFour ].reduce(
    function (prevFunc, nextFunc){
        return function(value){

        }
    },
    function(k) { return k; }
);
```
prevFunc: 누적값, nextFunc: 누적할 값

### 리덕스 

하이오더는 천천히... 분산해서 공부...

**리덕스** : 서버에서 가져온 데이터를 이용하여 새로운 결과물을 만드는 경우
**컨텍스트** : 컴포넌트의 통합 데이터를 관리하는 경우 

| 구분 | 설명 |
| 프로퍼티 | 상위 컴포넌트에서 하위 컴포넌트로 전달되는 읽기 전용 데이터   |
| state | 컴포넌트의 state를 저장하고 변경할 수 있는 데이터 |
| 컨텍스트 | 부모 컴포넌트에서 생성하여 모든 자식 컴포넌트에 전달하는 데이터 |
| 리덕스 | 서버에서 받은 데이터를 앱 전체에 전달하거나 관리 |

#### 리덕스 설치
```
yarn add redux react-redux
```

#### 리덕스 개발자 도구 설치
```
yarn add redux-devtools-extension --dev
```
#### 리덕스 크롬 확장 도구
-> redux devtools

#### 리덕스 개발자 도구 연동
```
import React, { PureComponent } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

class ReduxApp extends PureComponent {
    store = createStore(
        state => state,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        );
    render() {
        return (
            <Provider store={this.store}>
                리덕스 예제
            </Provider>
        );
    }
}

export default ReduxApp;
```

```
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
```
