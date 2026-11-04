# 이형민 보안 포트폴리오

취약점 연구, 바이너리 익스플로이테이션, 인증 보안 개발과 pwnable.kr 풀이 기록을 정리한 정적 사이트입니다.

## 로컬 확인

```sh
python3 -m http.server 8000
```

## GitHub Pages

GitHub 저장소 Settings → Pages → Build and deployment에서 **Deploy from a branch**, 브랜치 **main**, 폴더 **/(root)**를 선택합니다. 이후 main에 변경 사항을 올리면 배포됩니다.

## 구성

- `index.html`: 소개, 자격과 대표 작업
- `style.css`: 공통 스타일과 반응형 레이아웃
- `writeups/*/index.html`: pwnable.kr 풀이 기록
- `downloads/`: 공개 분석 코드
- `assets/`: 분석 도식

분석 내용과 이미지는 작성자의 기록입니다. 외부 프로젝트와 도구의 권리는 각 권리자에게 있습니다.

Pretendard 폰트는 SIL Open Font License 1.1을 따릅니다. 라이선스 전문은 `assets/Pretendard-LICENSE.txt`에 있습니다.
