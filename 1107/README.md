![header](https://capsule-render.vercel.app/api?type=wave&color=auto&height=150&section=header&text=2023.%2011.%2007.&fontSize=25)

# pyScript & bunScript
# 📒pyScript
- HTML에 파이썬을 끼워넣은 시스템
- 파이썬 코드를 HTML에서 작성하고 동작시킬 수 있고, PyScript에서 Javascript 라이브러리 들을 부르고, 파이썬으로 모든 웹 개발을 할 수 있음
- 데이터 사이언스 (혹은 머신러닝 엔지니어) 로써 우리의 데시보드나 모델을 HTML 파일로 공유할 수 있고, 웹브라우저에서 열기만 하면 코드를 실행시킬 수 있음
- streamlit 같은 데모 프레임워크 없이도 웹에서 시연 가능

## PyScript의 원리
- CPython 과 WebAssembly/Emscripten은 포팅해주는 Pyodide로 만들어짐
- PyScript는 미래에 다른 언어들까지의 지원을 제공할 것

✅ WebAssembly
- 파이썬으로 웹사이트를 작성할 수 있게 만들어주는 근원적인 기술
- WebAssembly가 원래 개발될때는, 웹 브라우저는 오직 Javascript만 지원했음
- 2017년에 처음 release 되고 빠르게 2019년 W3C (World Wide Web Consortium) 표준이 됨
- 사람이 읽을 수 있는 .wat 텍스트 포멧 언어를 브라우저에서 실행시킬 수 있는 .wasm 바이너리 형식으로 전환
- 모든 언어에서 코드를 작성할 수 있게 허용해주고, WebAssembly로 컴파일할 수 있게 해주고, web browser에서 동작할 수 있게 해줌

## Get Started - To try PyScript
```
<link rel="stylesheet" href="https://pyscript.net/alpha/pyscript.css" />
<script defer src="https://pyscript.net/alpha/pyscript.js"></script>
```
PyScript를 시도해보기 위해서는, 적절한 pyscript 파일들이 import된 HTML 페이지를 위 태그와 함께 별도의 환경 구축 없이 작성하면 됨

## py-env
파이썬 코드에서 동작하기 위해 필요한 파이썬 패키지들을 정의함
```
<py-env>
  - bokeh
  - matplotlib
  - pandas
  - scikit-learn
  - path:
  - ./my-custom-py-module.py
</py-env>
```
파이썬 표준 라이브러리나 써드파티 OSS 패키지들과 함께 사용하기 위해서는 py-env 태그에 dependency 들을 명시하면 됨

각자가 작성한 파이썬 모듈에 대해서는 다음과 같은 path 아래에 위치에 맞게 작성하면 됨
## py-script
웹 페이지에서 실행될 파이썬 코드를 작성

```
<py-script>
  print('Hello, World!')
</py-script>
```
```
<py-script src="./python_file.py"> </py-script>
```
파이썬 코드를 위처럼 직접 작성하거나, 작성된 py 파일을 불러올 수 있음

## py-repl
코드 유저가 입력하고 확인할 수 있는 REPL (read-eval-prin loop) 컴포넌트를 생성

```
<py-repl>
import numpy as np

print(np.random.randn(10))
</py-repl>
```
## ⚠️주의사항
PyScript는 현재 매우 alpha 단계에 있고 많은 알려진 이슈들이 있으며 (로딩 시간 등) PyScript를 활용해 다양한 것을 시도해보기를 권하지만 production 단계에서 사용하는 것을 권장하지 않는다고 합니다.

# 📙bunScript
bunScript는 BunJS 패키지 관리자를 사용할 때 개발 워크플로를 향상하도록 설계된 Visual Studio Code 확장입니다. BunJS를 사용하여 파일 에 정의된 스크립트를 쉽게 보고 실행할 수 있습니다. package.json (NPM 스크립트 탭과 마찬가지로)

## Bun이란?
Bun은 Node.JS와 같은 자바스크립트 런타임입니다. <br>
자바스크립트 런타임: 자바스크립트 코드를 실행할 수 있는 환경

## BunScript 사용법
1. 파일이 포함된 프로젝트 디렉터리를 엽니다 package.json.
2. 탐색기 패널에서 "BUN SCRIPTS" 탭을 사용할 수 있습니다.
3. 스크립트를 클릭하여 터미널에서 실행합니다.

## Bun의 3가지 주요 설계 목표
Bun은 다음과 같은 3가지 주요 설계 목표를 가지고 만들어졌습니다.

1. 빠른 시작 속도: 엣지 컴퓨팅이 cold start 시간을 더욱 중요한 요소로 만들었기 때문에 빠른 시작 속도가 중요하다고 느꼈다고 합니다.
2. 빠른 실행 속도: Bun은 Safari에서 사용하는 성능 중심의 JS 엔진인 JavaScriptCore를 사용하여 빠른 실행 속도를 보장합니다.
3. 일관된 DX(개발자 경험): 번들러, 변환기 및 패키지 관리자를 기본적으로 포함하여서 좋은 개발자 경험을 제공합니다.

## 🚨 시작 속도와 실행 속도의 차이점
시작 속도는 애플리케이션이 처음 시작 될때 걸리는 속도를 말하는 것이고 실행 속도는 실제로 애플리케이션이 작동할 때의 속도를 의미한다.

또한, Bun은 노드의 drop-in replacement로 설계되었기 때문에 아무것도 변경할 필요 없이 바로 노드 앱을 bun에서 실행시킬 수 있습니다.

## Bun이 빠른 이유
위에서 말했다시피, Bun은 V8과 같은 기존의 방식보다 좀 더 빠르게 시작하고 수행하는 JavaScriptCore 엔진을 사용합니다.. 그리고 Bun은 저수준 프로그래밍 언어인 Zig로 작성되어 더 빠르게 동작합니다.

## ⚠️주의사항
Bun은 JavaScriptCore 엔진을 사용하고 저수준 언어인 Zig로 최적화를 진행하였기에 노드에 비해 월등한 성능을 자랑합니다. 하지만, 그럼에도 불구하고 아직까지 노드의 API를 100% 지원하지 못하고, 안정적인 버전에 들어가지 못하였기에 실제 프로젝트(사이드 프로젝트도 포함)에서 사용하기에는 적합하지 못하다고 생각됩니다.

# js, jQuery 갤러리 구현하기

## 자바스크립트로 학과 갤러리 구현
![image](https://github.com/baesub/Tue_Report/assets/113866062/f3ffdde1-5a74-4715-833c-efc709224b61)

## 제이쿼리로 학과 갤러리 구현
![image](https://github.com/baesub/Tue_Report/assets/113866062/6119489e-e3a8-4dfa-9497-4f07bf959ccc)


# <a href="https://baesub.github.io/Tue_Report/1107/ch08_dokdoApp/dokdo-intro.html"> Github </a>

