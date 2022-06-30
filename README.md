
<h1><p align="center">
 🧙‍♀️ PLEVIEW
    <p></h1>
    <h3> <p align="center">Please Review My Code (코드리뷰를 부탁해 🥰)</p></h3>
    
<br/>
    
## 🧨  소개

💙 테오의 스프린트 9기, 애벌레 조 🐛입니다 💙

<p>초보 개발자들이 코드리뷰를 가볍게 경험해볼 수 있는 플랫폼 사이트, Pleview!</p>
<p>선배 개발자들의 도움을 받아 코드의 고수로 거듭나보세요😎</p>

## 🎉 배포 링크
### [Pleview: Please Review My Code](https://pleview-898b3.web.app/)

1. 홈(피드) 페이지
![image](https://user-images.githubusercontent.com/68722179/176658700-abfe28a2-aba2-4ff6-a58b-6b95cdd85eff.png)

2. 질문 등록 페이지
![image](https://user-images.githubusercontent.com/68722179/176658865-496d2790-7cab-47f5-a14f-f64c35aabb4a.png)


3. 상세(코드리뷰) 페이지
![image](https://user-images.githubusercontent.com/68722179/176659350-753f4bf9-dfca-4a80-86b0-b6356eeeaa01.png)


4. 명예의 전당
![image](https://user-images.githubusercontent.com/68722179/176659455-9d842a86-9ed3-4fd9-8d6c-bede5e2a95eb.png)



## 🐩 기획 과정
### [Figma](https://www.figma.com/file/eJMB98Z3fAHhQJUnyOxqTS/%ED%85%8C%EC%98%A4%EC%9D%98-%EC%8A%A4%ED%94%84%EB%A6%B0%ED%8A%B8-9%EA%B8%B0---3%EC%A1%B0?node-id=0%3A1)

## ✨ 구현 기능
1. 피드(홈)

2. 질문 등록

3. 코드 리뷰하기(상세)

4. 명예의 전당



## 🧶 기술 스택
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![styled-components](https://img.shields.io/badge/styled-components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) 
![Firebase](https://img.shields.io/badge/Firebase-FF7F00?style=for-the-badge&logo=firebase&logoColor=white) 

## 👩‍👩‍👧‍👦 CONTRIBUTORS
<img src="./public/images/contributors.png">
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/Yena-Yun">엘 💻</a>
    </td>
    <td align="center">
      <a href="https://github.com/HyeongJun94">준 💻</a>
    </td>
    <td align="center">
      <a href="https://github.com/dhrod0325">민오 💻</a>
    </td>
    <td align="center">
      <a href="https://github.com/2-NOW">oliver 💻</a>
    </td>
   <td align="center">
      <a href="https://github.com/rlatmdgns">승훈 💻</a>
    </td>
  </tr>
</table>

## 🌸 실행 방법
 프로젝트를 git clone 하신 후 다음을 진행해주세요 🧃

    ```
      yarn install - yarn start
    ```

## 🗂 폴더 구조
```
┌── .firebase/                  - firebase set
├── .github                     - github set
├── node_modules/
├── public/                     
├── src/
│   ├── components/             - 공통 컴포넌트
│   │    └── Header.tsx            
│   │    └── Layout.tsx          
│   │    └── Sidebar.tsx        
│   ├── domain/                 - 도메인별 컴포넌트
│   │    └── CreateReview/      
│   │    └── Detail/        
│   │    └── Feed/         
│   │    └── Guide/           
│   │    └── Honor/
│   │
│   ├── store/                   - 전역상태관리
│   │    └── atoms/
│   │
│   ├── stlyes/                 - 전역 스타일(css)
│   │
│   │
│   ├── utill/                - 유틸 모음
│   │   └── constants         - 상수
│   │   └── firebase/         - 파이어베이스 
│   │   └── hooks             - customhooks
│   │   └── types             - 타입
│   │
│   │
├── App.tsx
├── index.css
├── index.tsx
│ 
│ 
├── .github                     - pull request에 사용되는 template
├── .eslintrc                   - eslint 설정        
├── .gitignore                  - git 형상관리에서 체크하지 않는 파일
├── .prettierrc                 - prettier 설정
├── tsconfig.json               - typescript 설정 파일
├── firebase.json               - 파이어베이스 설정 파일
├── package.json
└── README.md
```
