# 유클리드 기하학에서 리만 기하학, 그리고 LLM 임베딩까지: 고등학생 수준의 “거리·벡터·텐서” 직관과 시각화 레시피

## Executive Summary

당신이 잡으신 큰 방향(“임베딩 공간 = 어떤 거리/유사도 규칙을 택하느냐가 핵심이고, 그 일반화가 리만 계량이다”)은 **핵심 아이디어로는 맞습니다**. 다만 글로 풀어낼 때는 “리만 기하학이 LLM을 직접 돌린다”처럼 오해될 여지가 있어, **(1) LLM이 실제로 하는 계산(선형대수, 어텐션)과 (2) 우리가 임베딩을 해석할 때 쓰는 기하학적 렌즈(계량, 곡률, 비유클리드)**를 분리해 설명하는 게 안전합니다. citeturn5view0turn4view1

이 보고서는 고등학교 이과(유클리드 기하, 미적분 기초, 선형대수 기초) 수준에서 다음을 목표로 정리합니다.

- **유클리드 거리**는 “고정된 자(尺)와 직각(피타고라스)”이고, **리만 계량**은 “점마다(또는 방향마다) 달라지는 자”라는 직관으로 설명합니다. 리만 계량은 각 점에서 **대칭인 양의정부호 행렬(=계량 텐서 성분 \(g_{ij}(p)\))**로 나타낼 수 있고, 곡선 길이는 적분으로 정의됩니다. citeturn5view0turn3search0  
- LLM에서 흔히 말하는 **벡터**는 “힘 벡터”가 아니라 **숫자 \(d\)개로 된 좌표(리스트)**이며, 여러 토큰을 한꺼번에 다루면 그게 **행렬(또는 3차원 이상 텐서)**로 보일 뿐입니다. 딥러닝 프레임워크에서 텐서는 보통 “다차원 배열” 의미로 쓰입니다. citeturn8search7turn8search0  
- **King − Man + Woman ≈ Queen** 같은 예시는 “임베딩에서 관찰되는 선형 규칙성”을 보여주는 데 유용하지만, 항상 성립하는 법칙처럼 소개하면 위험합니다(평가/해석 주의). citeturn4view2turn0search2  
- LLM이 큰 연산을 하는 본질적 이유는 “곡률을 계산하려고 무한 행렬을 만든다”가 아니라, **큰 행렬곱을 매우 많이 수행하기 때문**입니다. 특히 트랜스포머 자기어텐션은 한 층에서 계산량이 대략 \(O(n^2\cdot d)\)로 커질 수 있음을 원 논문이 명시합니다(\(n\)=문장 길이, \(d\)=표현 차원). citeturn6view0turn4view1  

이제 당신이 쓰려는 “느낌 중심” 교육 글을 위해, **그릴 그래프(유클리드 vs 리만, 거리 비교, 벡터 산술, 어텐션, 연산량 스케일링)**를 바로 만들 수 있도록 수식·비유·파이썬 시각화 코드 레시피를 제공합니다.

## 학습 목표와 큰 그림

당신이 1997–1999년 교육과정에서 접한 수학(유클리드 기하, 미적분, 행렬)은 LLM을 이해하는 데 **충분히 좋은 출발점**입니다. 여기서 “리만 기하학”을 **정식 교과처럼 깊게** 들어가지 않고, 다음 한 문장으로만 잡아도 글이 크게 좋아집니다.

> 유클리드 기하학은 **어디서나 같은 자**(거리 규칙)를 쓰는 세계이고, 리만 기하학은 **장소(또는 방향)에 따라 자가 달라질 수 있는 세계**를 다룬다. citeturn5view0turn3search0  

그리고 LLM과의 연결은 이렇게 정리하는 게 안전합니다.

- 모델이 학습해 만든 임베딩은 우선 \(\mathbb{R}^d\) 안의 점(벡터)입니다(계산은 선형대수). citeturn4view1  
- 우리가 “가까움/비슷함”을 정하려면 **거리(계량)**를 택해야 하고, 그 선택을 일반화하면 리만 계량 같은 도구로 설명할 수 있습니다. citeturn5view0  
- 어떤 데이터(예: 계층 구조)는 유클리드보다 구면/쌍곡(비유클리드)이 더 “자연스럽게” 표현될 수 있다는 연구 흐름이 있습니다. citeturn7view1  

이 구도로 쓰면 “리만 기하학이 LLM을 굴린다”가 아니라 “리만 기하학이 임베딩을 **해석하는 좋은 언어**가 될 수 있다”로 정리됩니다.

## 필수 용어를 고등학생 수준으로 정리

아래 표는 당신이 요청하신 용어를 “교과 수준 직관 → LLM에서의 쓰임새”로 연결한 것입니다.

| 용어 | 고등학생 수준 정의 | LLM/임베딩에서 보이는 형태(예) |
|---|---|---|
| 스칼라(scalar) | 숫자 1개(예: 3, −1.2) | 손실(loss) 값 1개, 확률 1개 |
| 벡터(vector) | 숫자 여러 개를 순서대로 모은 것(좌표). “힘”은 벡터의 한 예일 뿐 | 임베딩 \(x\in\mathbb{R}^d\), 예: \(d=512\) |
| 행렬(matrix) | 숫자를 직사각형 표로 모은 것. 벡터를 다른 벡터로 보내는 변환으로도 봄(\(y=Ax\)) | 가중치 \(W\), 또는 문장 임베딩 묶음 \(X\in\mathbb{R}^{n\times d}\) |
| 텐서(tensor) | (딥러닝 실무에서는) “2차원 이상을 포함한 다차원 배열” | PyTorch에서 입력/출력/파라미터는 모두 tensor로 다룸 citeturn8search7turn8search0 |
| 차원(dimension) | 좌표축의 개수. \(d=3\)이면 \((x,y,z)\) | 임베딩 길이 \(d\) (512/768/1024 등), 또는 텐서 차수(ndim) citeturn8search1turn8search15 |
| 임베딩(embedding) | 대상을 “숫자 좌표”로 바꿔서 비슷한 것끼리 가깝게 놓는 표현 | 단어/토큰/문장 → \(\mathbb{R}^d\) 벡터. 주변단어 예측 목표가 이런 성질을 만든다고 설명됨 citeturn4view2 |
| 매트릭(metric) | (일상 “매트릭스”가 아니라) “거리 재는 규칙” | 유클리드 거리, 코사인 거리, 구면/쌍곡 거리 등 |
| 리만 계량(Riemannian metric) | 점마다 달라질 수 있는 “거리 재는 규칙”의 가장 표준적인 수학 형태 | 각 점 \(p\)에서 내적을 주는 \(g_p\). 좌표로 쓰면 \(g_{ij}(p)\) 행렬로 보임 citeturn5view0 |
| 은닉(hidden) | 중간 과정이라 밖에서 직접 관찰하지 않는 층/표현 | “은닉 상태(hidden state)”는 각 층의 중간 벡터들 citeturn1search2 |
| 어텐션(attention) | “어디를 참고할지” 가중치를 계산해 정보를 섞는 방법 | \( \mathrm{Attention}(Q,K,V)=\mathrm{softmax}(QK^\top/\sqrt{d_k})V \) citeturn4view1 |

당신의 질문 중 “LLM에서 말하는 벡터가 벡터 행렬 같지 않나?”는 **절반만 맞습니다**.

- 토큰 하나의 임베딩은 **벡터 1개**입니다.  
- 문장(토큰 \(n\)개)의 임베딩을 한꺼번에 모으면 **행렬 \(n\times d\)**로 보입니다.  
- 그리고 그 행렬을 배치(batch)로 여러 문장을 묶으면 **3차원 텐서**가 됩니다(예: batch×seq×dim). 이때 프레임워크 문서에서 “텐서”라고 부르는 게 자연스럽습니다. citeturn8search7turn8search1  

## 유클리드 거리와 리만 계량

당신의 글에서 가장 중요한 교육 포인트는 “계량(metric)”을 **‘자’ 비유**로 잡는 것입니다.

### 유클리드 기하학: 고정된 자와 피타고라스

평면에서 두 점 \((x_1,y_1),(x_2,y_2)\)의 거리는

\[
d_E = \sqrt{(x_1-x_2)^2 + (y_1-y_2)^2}
\]

이고, “작은 이동”을 쓰면

\[
ds^2 = dx^2 + dy^2
\]

로 요약됩니다(어디서나 같은 규칙). 리만 기하학 관점에서 보면 이것은 “계량이 항등행렬 \(I\)”인 특별한 경우입니다. citeturn5view0turn9search0  

**그림으로는**  
- 원점에서 같은 거리에 있는 점들의 집합이 “원”으로 그려집니다(등거리 곡선).  
- 최단경로가 “직선”입니다.

### 리만 기하학: 점마다 달라지는 ‘자’(계량 텐서)

리만 기하학에서는 “거리 규칙”이 점 \(p\)마다 달라질 수 있다고 두고, 그 규칙을 **각 점에서의 내적** \(g_p\)로 정의합니다. 교재 표현을 그대로 고등학생 버전으로 번역하면:

- 각 점 \(p\)에서, 접공간(그 점에서의 “접선/접평면 방향들”) 위에 내적을 준다.  
- 그 내적으로 “벡터 길이, 각도”를 정의한다. citeturn5view0  

좌표로 쓰면 리만 계량은 대개 이렇게 보입니다.

\[
ds^2 = \sum_{i,j} g_{ij}(p)\,dx^i\,dx^j
\]

여기서 \(g_{ij}(p)\)는 (그 점에서의) **대칭인 양의정부호 행렬** 성분입니다. citeturn5view0turn3search0  

그리고 곡선 \(\gamma(t)\)의 길이는 “미적분으로 재는 길이”로 정의됩니다.

\[
L(\gamma)=\int \sqrt{g_{\gamma(t)}(\dot\gamma(t),\dot\gamma(t))}\,dt
\]

(이 식은 “유클리드 길이 공식의 일반화”라고만 이해하셔도 충분합니다.) citeturn5view0  

**당신이 그릴 수 있는 핵심 그림(리만 계량의 시각화)**는 ‘지역 단위 원(unit circle)’입니다.

- 유클리드에서는 “길이 1인 방향들”이 원(동그라미)입니다.  
- 리만 계량에서는 그게 일반적으로 **타원**이 됩니다(방향에 따라 늘어남/줄어듦을 의미).  

이 한 장의 그림이 “계량 텐서가 왜 행렬처럼 보이는지”를 고등학생도 납득할 수 있게 만들어줍니다. citeturn5view0  

## 비유클리드 공간: 구면과 쌍곡

당신이 요청하신 “국소적으로 유클리드이되 전역으로 굽은” 예시는 **구면(지구 표면)** 하나로 거의 끝까지 설명할 수 있습니다. 쌍곡(하이퍼볼릭)은 “계층 구조” 연결에 좋습니다.

### 구면: 가까이서는 평면처럼 보이지만, 멀리 가면 휘어짐이 드러남

지구 표면 위에서 두 점 사이 최단경로는 보통 지도 위 직선이 아니라 **대권(great circle) 호**입니다. 즉 “직선” 개념이 “측지선(geodesic)”로 바뀝니다. citeturn9search2  

구면의 계량은 (3차원 유클리드 공간의 \(ds^2=dx^2+dy^2+dz^2\)를) 구 표면에 제한해 얻을 수 있고, 이를 유도하는 강의노트가 있습니다. citeturn9search0  
이걸 “구의 표면에서는 \(dr=0\)이므로 남는 항만이 표면 거리 규칙이 된다” 정도로 설명하면 고등학생도 따라옵니다. citeturn9search0  

또한 단위구에서 두 점의 법선 벡터(단위벡터) \(n_1,n_2\)를 쓰면, 표면 거리(중심각)는

\[
d_{S^2}(n_1,n_2)=\arccos(n_1\cdot n_2)
\]

로 나타낼 수 있습니다(“코사인”이 여기서 자연스럽게 등장). citeturn9search2  

이 부분은 나중에 “코사인 유사도 vs 유클리드 거리 vs (구면) 리만 거리”를 한 번에 묶어주는 다리 역할을 합니다.

### 쌍곡(하이퍼볼릭): ‘가장자리에 갈수록 공간이 늘어나는’ 느낌

쌍곡기하는 그림으로는 **포앵카레 원판**이 가장 교육적으로 좋습니다. 원 안에서 보면 바깥쪽이 눌려 보이지만, 실제 쌍곡 거리에서는 **경계에 가까울수록 거리가 매우 빠르게 커집니다**. 이 성질 때문에 “나뭇가지처럼 아래로 갈수록 급격히 분기하는 계층(트리)”를 비교적 낮은 차원에서 담기 좋다는 연구가 유명합니다. citeturn7view1  

포앵카레 원판에서의 리만 계량과 거리 공식은 원 논문에 명시되어 있어(공식 자료로서 깔끔합니다):

- 계량 텐서가 유클리드 계량에 위치 의존 스케일을 곱한 형태  
- 거리:
\[
d(u,v)=\operatorname{arcosh}\!\left(1 + \frac{2\|u-v\|^2}{(1-\|u\|^2)(1-\|v\|^2)}\right)
\]
- 그리고 측지선은 “경계에 직교하는 원호(또는 지름)”라는 직관도 함께 제공합니다. citeturn7view0turn7view1  

특히 교육 글에서 아주 유용한 문장은 이 논문의 설명입니다: “트리의 루트는 원점에 두면 가깝고, 잎(leaf)은 경계 근처에 두더라도 쌍곡 거리상 멀어질 수 있다(거리 증가가 빠르기 때문).” citeturn7view1  

image_group{"layout":"carousel","aspect_ratio":"16:9","query":["great circle geodesic on sphere illustration","Poincaré disk geodesics orthogonal to boundary diagram","tangent plane on sphere local flat illustration"],"num_per_query":1}

## LLM에서 임베딩·은닉·어텐션

당신이 쓰려는 글에서 “LLM 수학”의 최소 핵심은 세 단계입니다.

### 임베딩: 토큰을 벡터로 바꾸는 첫 관문

트랜스포머 계열에서는 입력 토큰들을 먼저 “연속 벡터”로 바꾸고, 그 위에 위치 정보(positional encoding)를 더해 처리합니다. 원 논문은 모델 내부 표현 차원 \(d_{\text{model}}\)을 예로 512로 두고, 임베딩 층도 같은 차원을 출력하도록 맞춘다고 설명합니다. citeturn6view1  

즉 “512차원 임베딩”은 (적어도 트랜스포머 기본형)에서 **모델이 내부에서 쓰는 좌표의 길이**라고 이해하시면 됩니다. citeturn6view1  

또 단어 임베딩(고전 word2vec)에서는 “주변 단어 예측” 목표를 최적화하면 비슷한 단어가 가깝게 모인다고 설명합니다(분포 가설 계열 직관). citeturn4view2  

### 은닉: 왜 ‘은닉’인가

은닉(hidden)은 신비주의 용어가 아니라 **관측되지 않는 중간 표현**이라는 뜻입니다. 딥러닝 교재에서는 입력층과 출력층 사이의 층들을 hidden layer라고 부르고, 그 층의 뉴런/벡터가 hidden representation을 이룬다고 설명합니다. citeturn1search2  

LLM에서는 매 층마다 “토큰별 벡터”가 계속 바뀌는데, 그 전 과정을 통틀어 **은닉 상태(hidden states)**라고 부르는 경우가 많습니다. (당신이 그래프로 그리기엔 “층이 쌓일수록 점들이 조금씩 움직인다” 같은 애니메이션 구상이 가능합니다.)

### 어텐션: “어디를 볼지”를 벡터 연산으로 계산

트랜스포머 논문은 어텐션을 “query와 key의 호환성으로 가중치를 만들고, value를 가중합한다”로 정의합니다. 그리고 핵심 공식이 하나로 요약됩니다. citeturn4view1  

\[
\mathrm{Attention}(Q,K,V)=\mathrm{softmax}\left(\frac{QK^\top}{\sqrt{d_k}}\right)V
\]

여기서 중요한 교육 포인트는 다음 두 가지입니다.

1) **어텐션은 ‘임베딩 결과가’ 아니라 ‘임베딩 위에서’ 계산되는 다음 단계 연산**입니다. 임베딩(토큰→벡터)이 입력이고, 어텐션은 그 벡터들 사이의 관계를 계산해 다시 섞습니다. citeturn4view1turn6view1  
2) 왜 \(\sqrt{d_k}\)로 나누는가? 논문은 \(d_k\)가 커지면 내적 값 규모가 커져 softmax가 기울기 작은 영역으로 들어갈 수 있어 스케일링이 필요하다고 설명하며, 내적의 분산이 \(d_k\)에 비례한다는 간단한 확률 계산도 덧붙입니다(고등학생도 “합의 분산은 더 커진다” 정도로 소화 가능합니다). citeturn4view1  

### “LLM이 왜 엄청난 연산을 해야 하냐”에 대한 정확한 방향

당신의 가설 중 “차원이 1 늘면 제곱으로 연산이 늘어난다”는 **상황에 따라** 맞습니다.

- 벡터 두 개의 내적은 \(O(d)\)입니다(차원에 선형).  
- 하지만 한 층에서 자주 나오는 **큰 행렬곱**은 대개 \(O(d^2)\)급이 됩니다(예: \(d\times d\) 가중치와 \(d\) 벡터의 곱).  
- 트랜스포머 자기어텐션은 한 층에서 \(O(n^2\cdot d)\)로 커질 수 있다고 원 논문 표에 명시되어 있습니다(\(n\)=시퀀스 길이). citeturn6view0  

따라서 “곡률을 정확히 표현하려고 무한 행렬이 필요해서”가 아니라, **(1) 큰 차원 \(d\)**과 **(2) 길이 \(n\)**가 결합된 구조가 계산을 키우는 쪽이 더 정확한 설명 방향입니다. citeturn6view0turn6view1  

## 그릴 그래프 레시피와 코드 예제

이 섹션은 “실제 임베딩을 시각화”가 아니라, 당신이 쓰려는 교육 글을 위해 **직관을 만드는 그림**만을 목표로 합니다. 프레임워크는 (1) 정적 그림, (2) 애니메이션 두 갈래로 제안합니다.

### 추천 그래프 프레임워크 비교

| 목적 | 추천 도구 | 장점 | 근거 |
|---|---|---|---|
| 2D/3D 정적 그래프(논문/블로그 삽입) | Matplotlib | 2D는 물론 기본 3D 산점도/표면도 가능 | 3D 예제 문서가 공식 갤러리로 제공 citeturn1search3turn1search15 |
| 수학 개념 애니메이션(층이 쌓이며 점 이동 등) | Manim | 설명용 애니메이션에 특화(수학 교육 영상에 널리 사용) | 공식 문서/프로젝트 소개 citeturn8search13turn8search17 |
| 클릭하며 만지는 교육용 3D 도형 | GeoGebra 3D | 설치/공유가 쉬운 인터랙티브 도형(교육 친화) | 3D 계산기/도움말 문서 citeturn8search12turn8search16 |

### 유클리드 기하학 그림 예제: “등거리 원 + 최단경로 직선”

```python
import numpy as np
import matplotlib.pyplot as plt

# 등거리 곡선: sqrt(x^2+y^2)=r
xs = np.linspace(-3, 3, 400)
ys = np.linspace(-3, 3, 400)
X, Y = np.meshgrid(xs, ys)
R = np.sqrt(X**2 + Y**2)

plt.figure()
plt.contour(X, Y, R, levels=[0.5, 1, 1.5, 2, 2.5], linewidths=1)
plt.plot([ -2, 2 ], [ -1, 1 ], linewidth=2)  # 두 점을 잇는 직선(유클리드 최단경로)
plt.scatter([-2, 2], [-1, 1], s=60)
plt.gca().set_aspect('equal', adjustable='box')
plt.title("Euclidean: circles of equal distance + straight-line shortest path")
plt.show()
```

이 그림 한 장으로 “유클리드 거리 = 피타고라스 = 원/직선”이 묶입니다. citeturn9search0  

### 리만 계량 그림 예제: “점마다 달라지는 지역 단위 원(타원)”

고등학생용으로는 “계량 텐서 = 그 점에서의 ‘길이 계산 행렬’”을 **타원**으로 보여주는 게 가장 직관적입니다. 예를 들어

- \(g(x,y)=\begin{pmatrix}1&0\\0&(1+x^2)\end{pmatrix}\)  
이면 \(x\)가 커질수록 \(y\)방향 이동이 더 ‘비싸집니다’.

지역 단위 원(정확히는 단위 벡터 집합)은  
\[
\{v\in\mathbb{R}^2 : v^\top g(x,y)\,v = 1\}
\]
이고, 이것이 타원으로 그려집니다. “행렬이 길이를 바꾼다”는 걸 한 번에 보여줄 수 있습니다. citeturn5view0  

```python
import numpy as np
import matplotlib.pyplot as plt

def unit_ellipse_points(g, n=200):
    # v^T g v = 1 을 만족하는 점들을 수치적으로 생성
    # 2D에서는 g가 양의정부호이면, g의 고유분해로 타원 축을 만들 수 있습니다.
    w, V = np.linalg.eigh(g)  # g = V diag(w) V^T
    # 단위 원 위 점 u를 만들고, v = V diag(1/sqrt(w)) u 로 변환하면 v^T g v = 1
    ts = np.linspace(0, 2*np.pi, n)
    U = np.stack([np.cos(ts), np.sin(ts)], axis=0)   # (2,n)
    S = np.diag(1.0/np.sqrt(w))
    P = V @ S @ U
    return P[0], P[1]

xs = [-2, -1, 0, 1, 2]
plt.figure()
for x in xs:
    g = np.array([[1.0, 0.0],
                  [0.0, 1.0 + x*x]])
    ex, ey = unit_ellipse_points(g)
    plt.plot(ex + x*1.5, ey, linewidth=2)  # 타원을 x에 따라 옆으로 배치
    plt.text(x*1.5, 0, f"x={x}", ha="center", va="center")

plt.gca().set_aspect('equal', adjustable='box')
plt.title("Riemann metric intuition: local unit circles become ellipses")
plt.show()
```

### 구면(리만) 거리 vs 유클리드(현)거리 vs 코사인 유사도: 한 그림으로 묶기

단위벡터 \(x,y\)에 대해

- 코사인 유사도: \(\cos = x\cdot y\) citeturn2search6  
- (현)유클리드 거리(직선): \(\|x-y\|=\sqrt{2-2(x\cdot y)}\)  
- (구면)측지거리: \(d_{S^2}=\arccos(x\cdot y)\) citeturn9search2  

즉 **같은 내적 \(x\cdot y\)**가 “코사인/유클리드/구면거리”로 서로 다른 척도로 변환됩니다.  
이건 당신이 쓰려는 “유클리드 vs 코사인 vs 리만적 거리” 절의 핵심 도식이 됩니다.

```python
import numpy as np
import matplotlib.pyplot as plt

t = np.linspace(-1, 1, 400)  # t = x·y (cosine similarity for unit vectors)
chord = np.sqrt(2 - 2*t)     # Euclidean chord length
angle = np.arccos(np.clip(t, -1, 1))  # spherical geodesic angle

plt.figure()
plt.plot(t, chord, linewidth=2, label="Euclidean distance on unit sphere (chord)")
plt.plot(t, angle, linewidth=2, label="Riemannian distance on sphere (arc angle)")
plt.xlabel("t = dot(x, y) = cosine similarity (when ||x||=||y||=1)")
plt.ylabel("distance/angle")
plt.title("Cosine vs Euclidean vs spherical (Riemannian) distance")
plt.legend()
plt.show()
```

### “King − Man + Woman ≈ Queen”을 그래프로 그리는 교육용 예제

원 논문은 단어 벡터에서 “선형 이동(translation)” 형태의 규칙성이 관찰된다고 보고합니다(예: Madrid − Spain + France ≈ Paris). citeturn4view2  
다만 이걸 소개할 때는 “항상 정확한 방정식”이 아니라 “자주 관찰되는 패턴/근사”라고 밝혀야 안전합니다. 유사 과제를 어떻게 평가해야 하는지에 대한 비판적 분석도 있습니다. citeturn0search2  

교육용으로는 실제 임베딩을 쓰지 않고, 아래처럼 **평행사변형(벡터 덧셈) 그림**만으로도 충분히 전달됩니다.

```python
import matplotlib.pyplot as plt

# 장난감 2D 좌표(관계가 성립하도록 만든 예시)
king   = (2.0, 2.0)
man    = (1.0, 1.0)
woman  = (1.0, 2.0)
queen  = (2.0, 3.0)  # king - man + woman = (2,2)-(1,1)+(1,2)=(2,3)

words = {"king": king, "man": man, "woman": woman, "queen": queen}

plt.figure()
for w,(x,y) in words.items():
    plt.scatter([x],[y], s=80)
    plt.text(x+0.05, y+0.05, w)

# 벡터 산술 화살표
plt.arrow(man[0], man[1], king[0]-man[0], king[1]-man[1], width=0.01, length_includes_head=True)
plt.arrow(woman[0], woman[1], queen[0]-woman[0], queen[1]-woman[1], width=0.01, length_includes_head=True)

plt.arrow(king[0], king[1], (queen[0]-king[0]), (queen[1]-king[1]), width=0.01, length_includes_head=True)
plt.text((king[0]+queen[0])/2, (king[1]+queen[1])/2, " + (woman-man)", ha="center")

plt.gca().set_aspect('equal', adjustable='box')
plt.title("Toy visualization of king - man + woman ≈ queen")
plt.show()
```

실제 word2vec류에서는 보통 “\(v = v_{\text{king}} - v_{\text{man}} + v_{\text{woman}}\)”을 만든 뒤, 코사인 유사도가 가장 큰 단어를 고르는 방식으로 “≈”을 구현합니다(근사 최근접 이웃). 이 “선형 규칙성” 관찰이 원문에 명시되어 있습니다. citeturn4view2turn2search6  

### “차원·연산량이 왜 폭발하는지” 시각화 예제

트랜스포머 원 논문은 자기어텐션 한 층의 복잡도가 \(O(n^2\cdot d)\)라고 표로 정리합니다. citeturn6view0  
이걸 “차원( \(d\) )이 커지면 선형이 아니라 곱으로 커진다”는 직관으로 그려주면, 당신이 원하신 “연산이 왜 엄청나게 큰가” 그림이 됩니다.

```python
import numpy as np
import matplotlib.pyplot as plt

d = np.array([128, 256, 512, 1024, 2048])
n = np.array([64, 128, 256, 512, 1024])

plt.figure()
plt.plot(d, d**2, marker="o", linewidth=2, label="dense layer-ish ~ d^2")
plt.plot(d, d, marker="o", linewidth=2, label="dot product ~ d")
plt.xscale("log"); plt.yscale("log")
plt.xlabel("d (embedding/hidden dimension)")
plt.ylabel("relative operation count (log-log)")
plt.title("How compute scales with dimension d")
plt.legend()
plt.show()

plt.figure()
plt.plot(n, n**2, marker="o", linewidth=2, label="self-attention ~ n^2")
plt.plot(n, n, marker="o", linewidth=2, label="sequential ~ n")
plt.xscale("log"); plt.yscale("log")
plt.xlabel("n (sequence length)")
plt.ylabel("relative operation count (log-log)")
plt.title("How compute scales with sequence length n")
plt.legend()
plt.show()
```

이런 그림을 넣으면, 당신이 적어주신 “차원이 커질수록 제곱으로 연산이 많아진다”는 말이 **언제 맞고(큰 행렬곱, 어텐션), 언제는 아닌지(단순 내적)**를 자연스럽게 분리해서 설명할 수 있습니다. citeturn6view0turn4view1  

### 어텐션을 그림으로 보여주는 최소 예제(히트맵)

어텐션 핵심은 “가중치 행렬(각 토큰이 다른 토큰을 얼마나 보는가)”입니다. 원 논문은 어텐션이 “가중합”이며 공식이 위와 같다고 설명합니다. citeturn4view1  

교육 글에서는 실제 Q,K를 학습시키지 않아도, 임의의 작은 Q,K를 만들어 softmax로 가중치를 만든 뒤 히트맵으로 그리면 이해가 빠릅니다.

```python
import numpy as np
import matplotlib.pyplot as plt

def softmax(a):
    a = a - a.max(axis=-1, keepdims=True)
    ea = np.exp(a)
    return ea / ea.sum(axis=-1, keepdims=True)

np.random.seed(0)
n = 6   # 토큰 개수
dk = 4  # head 차원(장난감)
Q = np.random.randn(n, dk)
K = np.random.randn(n, dk)

scores = (Q @ K.T) / np.sqrt(dk)
A = softmax(scores)  # attention weights

plt.figure()
plt.imshow(A, aspect="auto")
plt.colorbar()
plt.title("Toy self-attention weights (rows: query token, cols: key token)")
plt.xlabel("key token index")
plt.ylabel("query token index")
plt.show()
```

## 참고문헌과 권장 자료

아래는 “공식/원문 우선 + 한국어 자료 포함” 원칙으로, 당신이 글을 쓰며 바로 인용/참고하기 좋은 순서로 정리했습니다.

- entity["people","존 M. 리","mathematician textbook author"], *Riemannian Manifolds: An Introduction to Curvature* (리만 계량의 정의, 좌표에서 \(g_{ij}\) 행렬로 쓰는 형태) citeturn5view0  
- entity["people","베른하르트 리만","german mathematician 1826"], entity["people","윌리엄 킹던 클리퍼드","english mathematician 1845"] 번역, *On the Hypotheses which lie at the Bases of Geometry* (역사적 원전 맥락) citeturn3search0  
- entity["people","토마시 미콜로프","nlp researcher"] 등, *Distributed Representations of Words and Phrases and their Compositionality* (단어벡터의 선형 규칙성, 주변단어 예측 목표) citeturn4view2turn1search0  
- Vaswani 등, *Attention Is All You Need* (Scaled Dot-Product Attention 공식, \(d_{\text{model}}=512\), 복잡도 \(O(n^2 d)\) 표) citeturn4view1turn6view0turn6view1  
- Nickel & Kiela, *Poincaré Embeddings for Learning Hierarchical Representations* (쌍곡 공간 계량/거리 공식, 계층 데이터 직관) citeturn7view0turn7view1  
- scikit-learn 문서: cosine similarity/거리 정의(코사인=정규화 내적) citeturn2search6turn2search2  
- Swarthmore 강의노트: 구면 위 계량을 유클리드 계량에서 유도(교육용으로 깔끔) citeturn9search0  
- PyTorch 한국 사용자 모임 튜토리얼: “텐서=배열/행렬과 유사한 자료구조”라는 실무적 정의(한국어로 인용하기 좋음) citeturn8search7  
- Matplotlib 공식 3D 예제: 산점도/3D 도표 기본 citeturn1search3turn1search15  
- Manim 공식 문서(수학 애니메이션 제작) citeturn8search13turn8search17  
- GeoGebra 3D 도움말(교육용 3D 조작) citeturn8search12turn8search16  

(평가 주의 관련) “King−Man+Woman”류 유추(analogy) 평가가 단순하지 않다는 논의: Levy & Goldberg의 분석(유추 과제 정의/해석 주의) citeturn0search2