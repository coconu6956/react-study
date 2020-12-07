
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
