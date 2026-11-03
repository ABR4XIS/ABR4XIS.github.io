# 이형민 보안 포트폴리오

Windows 클라이언트 취약점 분석, pwnable 풀이와 Linux·ARM64 학습 기록입니다.

HTML, CSS와 JavaScript로 구성한 정적 사이트입니다. `index.html`에서 기록을 선택하면 `cases/`의 상세 글로 이동합니다.

## 로컬 확인

```sh
python3 -m http.server 8000
```

## GitHub Pages

GitHub 저장소 Settings → Pages → Build and deployment에서 **Deploy from a branch**, 브랜치 **main**, 폴더 **/(root)**를 선택합니다. 이후 main에 변경 사항을 올리면 배포됩니다.

## 수정

- `index.html`: 프로필과 기록 목록
- `style.css`: 공통 스타일과 반응형 레이아웃
- `cases/*/index.html`: 상세 분석과 학습 노트
- `assets/`: 폰트, 스크린샷과 원본 도식

분석 내용과 이미지는 작성자의 기록입니다. 외부 프로젝트와 도구의 권리는 각 권리자에게 있습니다.

Pretendard 폰트는 SIL Open Font License 1.1을 따릅니다. 라이선스 전문은 `assets/Pretendard-LICENSE.txt`에 있습니다.
