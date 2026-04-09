# LLM의 수학적 기반

대형 언어 모델(LLM)은 본질적으로 **고차원 벡터 공간에서의 선형대수 연산**으로 작동한다. 흔히 "AI가 리만 기하학으로 돌아간다"는 오해가 있지만, 실제로 GPT·LLaMA 등 주류 LLM은 모든 계산을 **평탄한 유클리드 공간** $\mathbb{R}^d$에서 수행한다. 리만 기하학은 LLM을 직접 구동하는 엔진이 아니라, 학습된 임베딩 공간의 기하학적 구조를 **해석하고 분석하는 언어**로서 가치를 지닌다. 이 자료는 한국 고등학교 이과 교육과정(유클리드 기하, 미적분, 행렬 기초)을 기반으로, LLM 이면의 수학을 8개 핵심 주제로 풀어낸다.

---

## 1. 유클리드 자와 리만 자: 거리 측정의 두 패러다임

### 유클리드 거리에서 리만 계량으로

고등학교에서 배우는 피타고라스 정리를 $n$차원으로 확장하면, 두 점 $\mathbf{x}$와 $\mathbf{y}$ 사이 거리는 다음과 같다:

$$d(\mathbf{x}, \mathbf{y}) = \sqrt{\sum_{i=1}^{n}(x^i - y^i)^2}$$

이를 미소(infinitesimal) 형태로 쓰면 **선소(line element)**가 된다:

$$ds^2 = \sum_{i=1}^{n}(dx^i)^2 = \delta_{ij}\,dx^i\,dx^j$$

여기서 $\delta_{ij}$는 크로네커 델타(단위행렬)로, $i=j$이면 1, 아니면 0이다. 이것이 가장 단순한 **메트릭 텐서** — 모든 점에서 동일하고 모든 방향에서 동일한 "자(ruler)"다.

리만 기하학은 이 자를 일반화한다. 리만 다양체 $(M, g)$에서 선소는:

$$\boxed{ds^2 = \sum_{i,j=1}^{n} g_{ij}(p)\,dx^i\,dx^j}$$

핵심은 $g_{ij}(p)$가 **위치 $p$에 따라 변한다**는 것이다. 유클리드 공간에서는 $g_{ij} = \delta_{ij}$로 상수이지만, 곡면에서는 점마다 다르다.

### "점마다 달라지는 자" 비유의 수학적 정당성

이 비유는 정확한 수학적 근거를 갖는다. Wolfram MathWorld의 정의에 따르면 메트릭 텐서는 "일반화된 피타고라스 정리에서 미소 변위 앞에 놓이는 곱셈 인수(multiplication factor)"다. 구체적으로:

**유클리드 공간**: $g_{ij} = \delta_{ij}$가 상수 → 어디서든 같은 자로 측정
**곡면(예: 포앵카레 원판)**: $ds^2 = \frac{4(dx^2 + dy^2)}{(1-x^2-y^2)^2}$ → 경계에 가까울수록 분모가 0에 가까워지면서 같은 유클리드 한 걸음이 **엄청난 쌍곡 거리**가 됨

지구 표면에서 적도와 극지방의 경도 1도가 나타내는 실제 거리가 다른 것과 동일한 원리다. **메트릭 텐서의 성질**은 대칭($g_{ij}=g_{ji}$), 양정치(모든 영이 아닌 벡터 $v$에 대해 $g_{ij}v^iv^j > 0$), 매끄러운 변화의 세 가지다.

### 등거리 곡선: 원 vs 타원

유클리드 공간에서 한 점으로부터 같은 거리에 있는 점들의 집합 $\{(x,y) : x^2+y^2=r^2\}$은 **원**이다. 모든 방향이 동등하기 때문이다.

일반적 리만 공간에서 $\{(dx^i) : g_{ij}dx^idx^j = \varepsilon^2\}$는 접공간에서 **타원**을 이룬다. $g_{ij}$가 단위행렬의 스칼라배가 아닐 때, 어떤 방향은 더 "늘어나"있다. $g_{ij}$의 고유벡터가 타원의 주축 방향을, **고유값** $\lambda_k$가 반축의 길이 $\varepsilon/\sqrt{\lambda_k}$를 결정한다. 단, 포앵카레 원판처럼 $g_{ij} = f(p)\cdot\delta_{ij}$인 **등각(conformal) 계량**에서는 등거리 곡선이 여전히 원이되, 유클리드 크기만 위치에 따라 달라진다.

### 접공간(tangent space): 농구공 위의 개미

고등학생 수준에서 접공간을 이해하는 가장 좋은 비유는 이것이다. 농구공(구면) 위에 개미가 서 있다고 상상하자. 발밑의 아주 작은 영역은 마치 평평한 종이처럼 보인다. 이 **평평한 종이**가 바로 그 점에서의 접공간 $T_pM$이다.

- 다양체 $M$ 위의 각 점 $p$에서, $T_pM$은 $M$을 $p$ 근방에서 가장 잘 근사하는 **평탄한(유클리드) 벡터 공간**
- 차원 = 다양체의 차원 (2차원 곡면의 접공간은 2차원 평면)
- $T_pM$의 벡터들은 $p$에서 출발할 수 있는 모든 **순간 속도 방향**
- 메트릭 텐서 $g_{ij}(p)$는 이 접공간에 살면서 벡터 간 **내적(따라서 거리와 각도)**을 정의

한국어 요약: 지구 표면 위의 한 점에 접하는 평면(접평면)이 접공간이다. 지구는 곡면이지만 아주 작은 영역에서는 평면처럼 보이며, 이 접평면에서 거리와 각도를 측정하는 도구가 메트릭 텐서 $g_{ij}$다.

### 시각화 방법론

```python
import numpy as np
import matplotlib.pyplot as plt

fig, axes = plt.subplots(1, 2, figsize=(14, 6))
theta = np.linspace(0, 2*np.pi, 100)

# 유클리드: 등거리 곡선 = 원
ax = axes[0]
for r in [0.5, 1.0, 1.5, 2.0]:
    ax.plot(r*np.cos(theta), r*np.sin(theta), label=f'd = {r}')
ax.scatter(0, 0, c='red', s=100, zorder=5)
ax.set_title('유클리드: 등거리 곡선 = 원')
ax.set_aspect('equal'); ax.legend(); ax.grid(True, alpha=0.3)

# 리만(포앵카레 원판): 쌍곡 등거리 곡선
ax = axes[1]
ax.add_patch(plt.Circle((0,0), 1, fill=False, color='black', lw=2))
for R, c in zip([0.5, 1.0, 2.0, 4.0], ['C0','C1','C2','C3']):
    r_eucl = np.tanh(R / 2)
    ax.plot(r_eucl*np.cos(theta), r_eucl*np.sin(theta), color=c, label=f'd_hyp = {R}')
ax.scatter(0, 0, c='red', s=100, zorder=5)
ax.set_title('포앵카레 원판: 쌍곡 등거리 곡선')
ax.set_xlim(-1.15, 1.15); ax.set_ylim(-1.15, 1.15)
ax.set_aspect('equal'); ax.legend(); ax.grid(True, alpha=0.3)
plt.tight_layout(); plt.show()
```

---

## 2. LLM의 언어는 벡터다: 토큰에서 텐서까지

### 벡터, 행렬, 텐서의 정의와 LLM에서의 역할

**스칼라**(0차 텐서)는 단일 숫자 $s \in \mathbb{R}$이다. **벡터**(1차 텐서)는 $d$개 숫자의 순서 있는 배열 $\mathbf{v} = [v_1, v_2, \ldots, v_d] \in \mathbb{R}^d$이고, **행렬**(2차 텐서)은 $n \times d$ 크기의 2차원 격자 $\mathbf{M} \in \mathbb{R}^{n \times d}$이며, **텐서**는 이를 임의 차원으로 일반화한 $\mathbb{R}^{d_1 \times d_2 \times \cdots \times d_k}$이다.

LLM에서 이들은 다음과 같이 대응한다:

| 단위 | 수학적 객체 | 형태 | 예시 |
|------|-------------|------|------|
| 토큰 1개 | 벡터 | $\mathbb{R}^d$ | "king" → $[0.12, -0.53, 0.91, \ldots] \in \mathbb{R}^{768}$ |
| 문장 ($n$개 토큰) | 행렬 | $\mathbb{R}^{n \times d}$ | "The cat sat" → $\mathbb{R}^{3 \times 768}$ |
| 배치 ($B$개 문장) | 3차원 텐서 | $\mathbb{R}^{B \times n \times d}$ | 32개 문장 → $\mathbb{R}^{32 \times 512 \times 768}$ |

### 물리의 "힘 벡터"와 LLM의 "임베딩 벡터"는 근본적으로 다르다

물리의 힘 벡터 $\vec{F} = (F_x, F_y, F_z)$는 3차원 물리 공간에서 크기와 방향을 가지며, 각 성분은 $x$축, $y$축, $z$축이라는 **명확한 물리적 의미**를 갖는다. 반면 LLM의 임베딩 벡터는 768차원 등 고차원 추상 공간에 살며, 개별 차원은 사람이 해석할 수 있는 이름이 없다. 수백 개의 차원이 **집단적으로** 의미적 특성(왕족성, 성별, 권력 등)을 분산 표현(distributed representation)한다.

### 임베딩의 원리: "주변 단어로 그 단어를 안다"

**분포 가설(distributional hypothesis)**은 "단어의 의미는 그 단어가 함께 쓰이는 맥락에 의해 결정된다"(J.R. Firth, 1957)는 원리다. word2vec(Mikolov et al., 2013)은 이 가설을 신경망으로 구현했다.

**Skip-gram 모델**은 중심 단어로부터 주변 단어를 예측하는 과제를 학습한다:

$$\frac{1}{T}\sum_{t=1}^{T}\sum_{\substack{-c \leq j \leq c \\ j \neq 0}} \log P(w_{t+j} \mid w_t)$$

여기서 확률은 소프트맥스로 정의된다:

$$P(w_O \mid w_I) = \frac{\exp(\mathbf{v}'_{w_O}{}^\top \mathbf{v}_{w_I})}{\sum_{w=1}^{W} \exp(\mathbf{v}'_w{}^\top \mathbf{v}_{w_I})}$$

실제로는 어휘 전체에 대한 소프트맥스가 너무 비싸므로 **네거티브 샘플링**을 사용한다:

$$\log \sigma(\mathbf{v}'_{w_O}{}^\top \mathbf{v}_{w_I}) + \sum_{i=1}^{k} \mathbb{E}_{w_i \sim P_n(w)}[\log \sigma(-\mathbf{v}'_{w_i}{}^\top \mathbf{v}_{w_I})]$$

핵심 통찰은 **실제 사용되는 임베딩은 은닉층의 가중치 행렬** $\mathbf{W} \in \mathbb{R}^{V \times D}$이라는 점이다. 신경망은 "가짜" 예측 과제를 학습하지만, 그 부산물로 의미 있는 벡터 표현이 만들어진다.

### 차원 수 512, 768, 1024의 의미

이 숫자들은 **멀티헤드 어텐션 설계**와 직결된다:

- 원조 트랜스포머: $d_{\text{model}} = 512 = 8 \text{ heads} \times 64$
- BERT-Base: $d_{\text{model}} = 768 = 12 \text{ heads} \times 64$
- BERT-Large: $d_{\text{model}} = 1024 = 16 \text{ heads} \times 64$

차원 수는 어텐션 헤드 수로 나누어 떨어져야 하며, **64의 배수**가 GPU 메모리 아키텍처(2의 거듭제곱)에 최적화되기 때문에 이런 값들이 선택되었다. 개별 차원은 사람이 해석 가능한 의미를 갖지 않으며, 수백 차원이 협력하여 의미를 **분산 인코딩**한다.

### 클러스터링의 수학적 근거

"비슷한 것끼리 모인다"는 현상의 수학적 근거는 명확하다. Levy & Goldberg(NIPS 2014)는 Skip-gram이 암묵적으로 **점별 상호정보량(PMI) 행렬을 인수분해**함을 증명했다:

$$\mathbf{v}_w \cdot \mathbf{v}'_c \approx \text{PMI}(w, c) - \log k$$

비슷한 맥락에서 등장하는 단어들은 비슷한 PMI 프로필을 가지므로, 저랭크 인수분해 과정에서 벡터 공간의 **가까운 위치**로 수렴한다. 훈련 목적함수 자체가 공출현 단어 쌍의 내적을 높이도록 그래디언트를 보내므로, 비슷한 맥락 분포를 가진 단어들은 같은 방향으로 밀려 자연스럽게 클러스터를 형성한다.

---

## 3. King − Man + Woman = Queen: 벡터 산술의 매력과 한계

### Mikolov의 원래 실험

Mikolov et al.(2013, NAACL-HLT)은 학습된 단어 벡터에서 놀라운 규칙성을 발견했다. "a : b = a* : ?"라는 유추 과제에서:

$$b^* = \arg\max_{x \in V \setminus \{a, b, a^*\}} \cos\left(\mathbf{v}_x,\; \mathbf{v}_b - \mathbf{v}_a + \mathbf{v}_{a^*}\right)$$

"king : man = woman : ?"에 적용하면 $\vec{v}_{\text{king}} - \vec{v}_{\text{man}} + \vec{v}_{\text{woman}}$에 코사인 유사도가 가장 높은 단어가 "queen"으로 나왔다. Google News 코퍼스(30억 단어)에서 학습한 300차원 Skip-gram으로, 의미적 유추 **54~61%**, 구문적 유추 **61~63%**, 전체 **59~61%** 정확도를 달성했다.

### 이것은 "법칙"이 아니라 "자주 관찰되는 패턴"이다

**정확도가 100%가 아니라 ~60%라는 사실** 자체가 이것이 보편 법칙이 아님을 보여준다. Levy & Goldberg(CoNLL 2014, 최우수 논문상)는 여러 핵심적 비판을 제기했다:

- **3CosAdd 방법은 코사인 유사도의 선형 결합을 최대화**하는 것과 동치이며, 이는 관계의 방향보다 개별 유사성에 의해 왜곡될 수 있다
- 이들이 제안한 **3CosMul** 방법 $b^* = \arg\max_{x} \frac{\cos(\mathbf{v}_x, \mathbf{v}_b) \cdot \cos(\mathbf{v}_x, \mathbf{v}_{a^*})}{\cos(\mathbf{v}_x, \mathbf{v}_a) + \epsilon}$이 모든 과제에서 3CosAdd를 능가
- **전통적 분포 표현(명시적 PMI 기반 희소 벡터)**도 비슷한 수준의 유추를 수행 → 이 현상은 신경망 고유가 아니라 **분포 의미론의 본질적 성질**
- **입력 단어 제외 트릭**: 입력 단어(king, man, woman)를 검색에서 제외하지 않으면, 실제 결과는 king − man + woman = **king**이다. "queen"과의 유사도 차이는 0.10 이상
- Gladkova et al.(2016)에 따르면 범주별 정확도는 **10.53%에서 99.41%까지** 극단적 편차를 보이며, 테스트셋의 56% 이상을 차지하는 국가:수도 관계가 전체 점수를 부풀림

### 2D 평행사변형 시각화와 그 한계

$\vec{v}_{\text{king}} - \vec{v}_{\text{man}} \approx \vec{v}_{\text{queen}} - \vec{v}_{\text{woman}}$이라는 관계는 2D PCA 투영에서 네 점이 대략 평행사변형을 이루는 것으로 시각화된다. "gender" 방향이 대략 평행하게 나타나는 것이다.

**한계**: 이는 300차원 이상의 벡터를 2차원으로 투영한 극단적 단순화이며, 원래 공간에서는 완벽한 평행사변형이 아니다. PCA가 설명하는 분산이 전체의 일부에 불과하므로, 2D 그림은 직관적 이해 도구일 뿐 증거로 사용해서는 안 된다.

```python
import numpy as np
import matplotlib.pyplot as plt
from sklearn.decomposition import PCA
import gensim.downloader as api

model = api.load('glove-wiki-gigaword-100')
words = ['king', 'man', 'woman', 'queen']
vectors = np.array([model[w] for w in words])

pca = PCA(n_components=2)
v2d = pca.fit_transform(vectors)

fig, ax = plt.subplots(figsize=(8, 6))
colors = ['#e74c3c', '#3498db', '#2ecc71', '#9b59b6']
for i, (w, c) in enumerate(zip(words, colors)):
    ax.scatter(v2d[i,0], v2d[i,1], c=c, s=200, zorder=5)
    ax.annotate(w.upper(), xy=(v2d[i,0], v2d[i,1]), fontsize=14,
                fontweight='bold', xytext=(0,15), textcoords='offset points', ha='center')
# 평행사변형 간선
for s, e in [(0,1), (2,3), (0,3), (1,2)]:
    ax.annotate('', xy=v2d[e], xytext=v2d[s],
                arrowprops=dict(arrowstyle='->', color='gray', lw=2))
ax.set_title('King - Man + Woman ≈ Queen (PCA 2D 투영)')
ax.grid(True, alpha=0.3); plt.tight_layout(); plt.show()
```

---

## 4. 은닉층의 정체와 어텐션의 수학

### "은닉(hidden)"이라는 이름의 유래

"은닉 유닛"이라는 용어는 Rumelhart, Hinton & Williams(1986, Nature)의 역전파 논문에서 대중화되었다. 원문: *"internal 'hidden' units which are not part of the input or output come to represent important features of the task domain."* 입력층은 외부 데이터를 받고, 출력층은 사용자에게 결과를 보여주지만, 중간층은 외부에서 **직접 관측할 수 없으므로** "은닉"이라 불린다. 각 은닉층은 수학적으로 다음을 계산한다:

$$\mathbf{h}^{(l)} = f\!\left(\mathbf{W}^{(l)} \mathbf{h}^{(l-1)} + \mathbf{b}^{(l)}\right)$$

여기서 $f$는 비선형 활성함수(ReLU 등)이다. 비선형성이 없으면 아무리 많은 층을 쌓아도 단순 선형 모델에 불과하다.

### Self-Attention: 트랜스포머의 심장

Vaswani et al.(2017), "Attention Is All You Need"에서 제안한 **스케일드 닷-프로덕트 어텐션**:

$$\boxed{\text{Attention}(Q, K, V) = \text{softmax}\!\left(\frac{QK^\top}{\sqrt{d_k}}\right) V}$$

| 구성요소 | 형태 | 직관적 의미 |
|----------|------|-------------|
| **Q (Query)** | $\mathbb{R}^{n \times d_k}$ | "나는 어떤 정보를 찾고 있는가?" — 도서관에서 검색어를 입력하는 것 |
| **K (Key)** | $\mathbb{R}^{n \times d_k}$ | "나는 어떤 정보를 가지고 있는가?" — 책의 색인(index) |
| **V (Value)** | $\mathbb{R}^{n \times d_v}$ | "내가 실제로 제공하는 정보는 무엇인가?" — 책의 본문 내용 |

각 토큰은 입력 임베딩 $\mathbf{x}$에 학습된 가중치 행렬을 곱해 자신만의 Q, K, V를 생성한다: $Q = XW^Q$, $K = XW^K$, $V = XW^V$. 그다음 $QK^\top$은 **모든 토큰 쌍의 호환성 점수**(내적)를 계산하고, 소프트맥스가 이를 확률 분포로 정규화하며, 그 가중치로 V를 가중합하면 각 토큰이 **문맥을 반영한 새 표현**을 얻는다.

### $\sqrt{d_k}$로 나누는 이유: 분산의 수학

원 논문의 각주가 정확한 수학적 근거를 제공한다. $q_i, k_i$가 평균 0, 분산 1인 독립 확률변수라면:

$$\text{Var}(q \cdot k) = \text{Var}\!\left(\sum_{i=1}^{d_k} q_i k_i\right) = d_k$$

내적의 **표준편차가** $\sqrt{d_k}$이므로, $d_k$가 크면(예: 64, 128) 내적 값이 극단적으로 커질 수 있다. 소프트맥스 함수 $\sigma(z_i) = e^{z_i}/\sum_j e^{z_j}$는 입력이 극단값일 때 그래디언트가 거의 0에 수렴하는 **포화 영역**에 빠진다. $\sqrt{d_k}$로 나누면:

$$\text{Var}\!\left(\frac{q \cdot k}{\sqrt{d_k}}\right) = \frac{d_k}{d_k} = 1$$

분산이 1로 정규화되어 소프트맥스가 적절한 기울기를 유지하고, 학습이 안정된다.

### 멀티헤드 어텐션: 왜 여러 개의 "눈"이 필요한가

$$\text{MultiHead}(Q,K,V) = \text{Concat}(\text{head}_1, \ldots, \text{head}_h) W^O$$

$$\text{head}_i = \text{Attention}(QW_i^Q, KW_i^K, VW_i^V)$$

원조 트랜스포머는 $h=8$개 헤드, $d_k = 512/8 = 64$를 사용했다. 각 헤드는 **서로 다른 유형의 관계**(구문적, 의미적, 위치적)에 주목하도록 학습된다. 논문에 따르면: "단일 헤드에서는 평균화가 이를 억제한다(averaging inhibits this)."

### 어텐션 히트맵 시각화

어텐션 가중치 행렬 $A = \text{softmax}(QK^\top/\sqrt{d_k})$는 $n \times n$ 행렬로, $A_{ij}$는 토큰 $i$가 토큰 $j$에 얼마나 주목하는지를 나타낸다. 이를 히트맵으로 시각화하면 모델이 언어를 처리하는 패턴이 드러난다: 초기 층은 인접 단어에, 깊은 층은 장거리 의미 관계에 주목하는 경향이 있다.

```python
import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np

tokens = ["The", "cat", "sat", "on", "the", "mat"]
# 예시 어텐션 가중치 (실제로는 모델에서 추출)
attn = np.random.rand(6, 6)
np.fill_diagonal(attn, attn.diagonal() + 0.3)
attn /= attn.sum(axis=1, keepdims=True)

plt.figure(figsize=(8, 6))
sns.heatmap(attn, xticklabels=tokens, yticklabels=tokens,
            cmap='YlOrRd', annot=True, fmt='.2f', square=True)
plt.title('Self-Attention 가중치 히트맵')
plt.xlabel('Key 토큰'); plt.ylabel('Query 토큰')
plt.tight_layout(); plt.show()
```

**주의**: Jesse Vig(ACL 2019)의 BertViz 라이브러리나 HuggingFace `output_attentions=True` 옵션으로 실제 모델의 어텐션을 추출할 수 있다. 다만 Jain & Wallace(2019) 연구에 따르면 어텐션 가중치가 항상 모델의 추론 과정을 충실히 반영하지는 않는다는 점에 유의해야 한다.

---

## 5. LLM은 왜 그렇게 많은 연산이 필요한가

### 자기어텐션의 $O(n^2 \cdot d)$ 복잡도 해부

$Q \in \mathbb{R}^{n \times d}$와 $K^\top \in \mathbb{R}^{d \times n}$의 행렬곱 $QK^\top$이 $O(n \cdot d \cdot n) = O(n^2 d)$ 연산을 요구한다. 여기서 **$n^2$는 모든 토큰 쌍의 조합**(각 토큰이 다른 모든 토큰과 상호작용)에서, **$d$는 각 쌍의 내적 계산**($d$차원 벡터의 내적은 $O(d)$)에서 비롯된다. 어텐션 × Values 곱도 $O(n^2 d_v)$이므로, 어텐션 층 전체는 $O(n^2 d)$이다.

**피드포워드 층**은 $\text{FFN}(x) = \max(0, xW_1 + b_1)W_2 + b_2$로, $W_1 \in \mathbb{R}^{d \times 4d}$이므로 토큰당 $O(d^2)$, $n$개 토큰에 대해 $O(n \cdot d^2)$이다.

| 구성요소 | 복잡도 | 주요 의존성 |
|----------|--------|-------------|
| 자기어텐션 | $O(n^2 \cdot d)$ | 시퀀스 길이에 이차적 |
| 피드포워드 | $O(n \cdot d^2)$ | 모델 차원에 이차적 |

**현실적 규모**: GPT-3는 $N = 1750$억 파라미터, 96개 층, $d = 12288$, 컨텍스트 $n = 2048$이다. 순방향 패스 한 번에 토큰당 약 $2N = 3.5 \times 10^{11}$ FLOP, 전체 학습에 **$3.14 \times 10^{23}$ FLOP**(약 $6ND$ where $D = 3000$억 토큰)이 소요되었다.

### "곡률을 표현하려고 무한 행렬이 필요하다"는 설명이 부정확한 이유

이 주장은 수학적으로 **틀렸다**. 리만 곡률 텐서 $R^\rho{}_{\sigma\mu\nu}$는 $n$차원 다양체에서 랭크-4 텐서이며, 대칭성을 고려한 **독립 성분의 수**는:

$$\frac{n^2(n^2-1)}{12}$$

| 차원 $n$ | 독립 성분 수 |
|:---:|:---:|
| 2 | 1 |
| 3 | 6 |
| 4 | 20 |
| 768 | 약 $2.9 \times 10^{10}$ |

**항상 유한**하다. 더 근본적으로, 표준 LLM은 **평탄 유클리드 공간**에서 작동하며, 유클리드 공간의 리만 곡률 텐서는 $R^\rho{}_{\sigma\mu\nu} = 0$ (모든 성분이 영)이다. LLM의 순방향 패스에는 어떤 리만 메트릭 텐서 $g_{ij}$도 사용되지 않는다. 혼동은 아마도 손실 함수의 곡면(Hessian 행렬 — GPT-3의 경우 $1750$억 × $1750$억이지만 여전히 유한)과 추상 다양체의 리만 곡률을 혼동한 데서 비롯될 것이다.

---

## 6. 구면과 쌍곡면: 비유클리드 공간의 임베딩

### 구면 기하학: 지구 위의 최단 경로

지구 표면은 양의 곡률을 가진 2차원 공간(2-구면 $S^2$)의 대표적 예이다. 이 공간에서 "직선"은 **대권(great circle)**, 즉 중심이 지구 중심과 일치하는 원이다. 적도와 경도선이 대표적이다.

단위 구면 위 두 점을 단위 벡터 $\mathbf{n}_1, \mathbf{n}_2 \in \mathbb{R}^3$으로 나타내면, 구면 거리는:

$$\boxed{d = \arccos(\mathbf{n}_1 \cdot \mathbf{n}_2)}$$

위도/경도 좌표 $(\phi_1, \lambda_1)$, $(\phi_2, \lambda_2)$로는:

$$d = R \cdot \arccos\!\left[\sin\phi_1\sin\phi_2 + \cos\phi_1\cos\phi_2\cos(\lambda_2 - \lambda_1)\right]$$

**"국소적으로 유클리드이되 전역으로는 굽은"**: 지구 위 어디에 서든 발밑은 평평해 보인다(국소적 유클리드). 하지만 충분히 멀리 걸으면 출발점으로 돌아온다(전역적 곡률). **다양체(manifold)**란 각 점의 근방이 $\mathbb{R}^n$과 닮은(homeomorphic) 공간으로, 이 성질을 수학적으로 포착한다.

### 쌍곡(하이퍼볼릭) 기하학과 포앵카레 원판

**포앵카레 원판 모델**은 쌍곡 평면을 열린 단위 원판 $\mathbb{D} = \{z \in \mathbb{C} : |z| < 1\}$으로 표현한다:

$$ds^2 = \frac{4(dx^2 + dy^2)}{(1 - x^2 - y^2)^2}$$

경계($|z| \to 1$)에서 등각 인수(conformal factor)가 무한대로 발산하므로, 유클리드로는 좁아 보이는 경계 근처가 쌍곡 거리로는 **무한히 멀다**. 거리 공식은:

$$\boxed{d(\mathbf{u}, \mathbf{v}) = \text{arcosh}\!\left(1 + \frac{2\|\mathbf{u}-\mathbf{v}\|^2}{(1-\|\mathbf{u}\|^2)(1-\|\mathbf{v}\|^2)}\right)}$$

여기서 $\text{arcosh}(x) = \ln(x + \sqrt{x^2 - 1})$이다. 어느 한 점이 경계에 가까워지면 분모가 0에 접근하여 거리가 무한대로 발산한다.

### Nickel & Kiela(2017): 쌍곡 공간이 계층 구조에 최적인 이유

Nickel & Kiela(NeurIPS 2017, "Poincaré Embeddings for Learning Hierarchical Representations")는 상징적 데이터를 포앵카레 볼에 임베딩할 것을 제안했다. 핵심 이유는 **체적 성장률**의 차이다:

| 성질 | 유클리드 ($\kappa=0$) | 쌍곡 ($\kappa=-1$) |
|------|----------------------|---------------------|
| 반지름 $\rho$ 원의 둘레 | $2\pi\rho$ (선형) | $2\pi\sinh\rho \approx \pi e^\rho$ (지수적) |
| 깊이 $d$의 이진 트리 노드 수 | — | $2^d$ (지수적) |

균형 $b$-진 트리는 깊이 $d$에 $O(b^d)$개의 노드를 가진다. 유클리드 공간의 체적은 $R^n$으로 **다항식적으로만** 성장하므로 지수적 분기를 수용하면 필연적으로 거리 왜곡(crowding)이 발생한다. 쌍곡 공간은 **지수적 체적 성장**으로 이를 왜곡 없이 수용한다. Sarkar(2011)는 모든 유한 트리가 유한 차원 쌍곡 공간에 **임의로 낮은 왜곡**으로 임베딩 가능함을 증명했다.

**정량적 결과** (WordNet 명사 계층구조, 82,115개 명사, 743,241개 관계):

| 차원 | 유클리드 MAP | 포앵카레 MAP |
|:---:|:---:|:---:|
| 5 | 0.024 | **0.823** |
| 10 | 0.059 | **0.851** |
| 200 | 0.168 | **0.870** |

**5차원 포앵카레 임베딩이 200차원 유클리드 임베딩을 압도한다.** 평균 순위(Mean Rank)에서는 유클리드 5차원의 3542.3 대비 포앵카레 5차원이 **4.9**로 약 720배 개선을 보였다. 자기조직화 성질로 인해 루트 노드는 원점 근방에, 리프 노드는 경계 근방에 자연스럽게 배치된다.

```python
import numpy as np
import matplotlib.pyplot as plt

fig, ax = plt.subplots(figsize=(8, 8))
ax.add_patch(plt.Circle((0,0), 1, fill=False, color='black', lw=2))

np.random.seed(42)
root = np.array([[0.0, 0.0]])
level1 = 0.5 * np.array([[np.cos(t), np.sin(t)]
                          for t in np.linspace(0, 2*np.pi, 4, endpoint=False)])
level2 = 0.85 * np.array([[np.cos(t), np.sin(t)]
                           for t in np.linspace(0, 2*np.pi, 8, endpoint=False)])
level3 = 0.95 * np.array([[np.cos(t), np.sin(t)]
                           for t in np.linspace(np.pi/16, 2*np.pi, 16, endpoint=False)])

ax.scatter(*root.T, c='red', s=200, zorder=5, label='Root (루트)')
ax.scatter(*level1.T, c='orange', s=120, zorder=5, label='Level 1')
ax.scatter(*level2.T, c='blue', s=80, zorder=5, label='Level 2')
ax.scatter(*level3.T, c='green', s=40, zorder=5, label='Level 3 (리프)')
for pt in level1:
    ax.plot([0, pt[0]], [0, pt[1]], 'k-', alpha=0.3)
ax.set_xlim(-1.15, 1.15); ax.set_ylim(-1.15, 1.15)
ax.set_aspect('equal'); ax.legend(); ax.grid(True, alpha=0.2)
ax.set_title('포앵카레 원판: 계층 구조 임베딩')
plt.show()
```

---

## 7. 세 가지 거리 척도가 같은 내적에서 어떻게 갈라지는가

### 수학적 정의

**유클리드 거리**: $d_E(\mathbf{x}, \mathbf{y}) = \|\mathbf{x} - \mathbf{y}\| = \sqrt{\sum_{i=1}^n (x_i - y_i)^2}$

**코사인 유사도**: $\cos\theta = \frac{\mathbf{x} \cdot \mathbf{y}}{\|\mathbf{x}\| \cdot \|\mathbf{y}\|}$, 코사인 거리 $d_{\cos} = 1 - \cos\theta$

**리만 거리**: $d_R(p, q) = \inf_\gamma \int_a^b \sqrt{g_{ij}(\gamma(t))\,\dot\gamma^i(t)\,\dot\gamma^j(t)}\,dt$ (측지선을 따른 최단 경로 길이)

### 단위벡터에서의 핵심 관계

$\|\mathbf{x}\| = \|\mathbf{y}\| = 1$일 때, 극화 항등식(polarization identity)에 의해:

$$\boxed{d_E^2 = 2(1 - \cos\theta)}$$

따라서 $d_E = \sqrt{2 \cdot d_{\cos}}$이고, 단위벡터에서는 유클리드 거리 최소화 = 코사인 유사도 최대화 = **동치**이다(단조 관계). 같은 내적 $\mathbf{x} \cdot \mathbf{y} = \cos\theta$에서 세 척도가 서로 다른 값을 산출하는 양상:

| 척도 | $\theta=0°$ | $\theta=60°$ | $\theta=90°$ | $\theta=180°$ |
|------|:---:|:---:|:---:|:---:|
| $\cos\theta$ (유사도) | 1 | 0.5 | 0 | −1 |
| $d_E$ (유클리드 거리) | 0 | 1 | $\sqrt{2}$ | 2 |
| $d_{\cos}$ (코사인 거리) | 0 | 0.5 | 1 | 2 |
| 각도 거리 | 0 | $\pi/3$ | $\pi/2$ | $\pi$ |

### LLM에서의 실제 사용 사례

**코사인 유사도**가 LLM에서 가장 널리 쓰인다. 임베딩의 크기(norm)는 단어 빈도 등에 의해 변할 수 있지만, 의미적 관계는 **방향**에 인코딩되기 때문이다. RAG(검색 증강 생성), 시맨틱 검색, 문장 유사도 비교에 표준적으로 사용된다.

**유클리드 거리**는 벡터가 이미 정규화된 경우(많은 최신 임베딩 모델은 L2 정규화 출력) 코사인 유사도와 동치이며, K-means 클러스터링이나 FAISS 벡터 데이터베이스에서 사용된다.

**리만 거리**는 포앵카레 임베딩(계층적 데이터), 쌍곡 어텐션 메커니즘, 학습된 표현의 내재적 기하학 분석 등 **특수한 경우**에 적용된다. 주류 LLM은 기본적으로 유클리드 연산을 수행하며, 리만적 관점은 사후 분석 도구로 활용된다.

---

## 8. 시각화 도구 선택 가이드: 교육 블로그를 위한 최적 조합

### 4대 도구 비교

| 기준 | Matplotlib | Plotly/Three.js | Manim | GeoGebra |
|------|:---:|:---:|:---:|:---:|
| 난이도 | 중 | 중/상 | 상 | 쉬움(사용)/중(제작) |
| 출력 품질 | ★★★★★ | ★★★★☆ | ★★★★★ | ★★★☆☆ |
| 인터랙티브 | 없음 | ★★★★★ | 없음(영상) | ★★★★★ |
| 웹 임베딩 | 이미지만 | HTML ★★★★★ | 영상/GIF | iframe ★★★★☆ |
| LLM 수학 콘텐츠 | ★★★★★ | ★★★★☆ | ★★★★★ | ★★☆☆☆ |
| 한국어 지원 | LaTeX 경유 | 유니코드 | LaTeX 경유 | 네이티브 ★★★★★ |

**Matplotlib**: 정적 그래프의 표준. NumPy/scikit-learn과 완벽 통합. 임베딩 시각화, 거리 곡선, 히트맵에 최적. SVG/PNG 출력으로 블로그에 바로 사용 가능. 3D는 `mpl_toolkits.mplot3d`로 지원하나 인터랙티브 불가.

**Plotly**: 웹 인터랙티브 시각화의 최강자. WebGL 기반 40+ 차트 유형. Python API로 작성 후 독립 HTML 파일로 내보내기 가능. hover, zoom, pan, 3D 회전이 기본 제공. **교육 블로그에 인터랙티브 3D 임베딩 공간을 넣으려면 최적**. 단점은 plotly.js가 ~3MB로 무겁다는 것.

**Manim**(3Blue1Brown): 수학 애니메이션의 최고봉. ManimCE(커뮤니티 에디션, `pip install manim`)와 ManimGL(Grant Sanderson 개인 버전) 두 가지가 존재. 선형 변환, 벡터 필드, 미적분 개념을 애니메이션으로 설명하는 데 탁월. **출력이 MP4/GIF**이므로 실시간 인터랙티브는 불가.

**GeoGebra**: 한국어 네이티브 지원으로 **고등학생 접근성 최고**. 코딩 없이 인터랙티브 기하학 앱 제작 가능. iframe으로 웹 임베딩 용이. 유클리드 기하, 함수 그래프, 미적분 시각화에 적합하나 ML 특화 콘텐츠에는 부적합.

### 교육 블로그 최적 조합 권장

- **주력(모든 포스트)**: Matplotlib(정적 도표 60%) + Plotly(인터랙티브 3D 25%)
- **보조(선택적)**: Manim 애니메이션 GIF(핵심 개념 15%) + GeoGebra(기하학 기초 앱)
- **원칙**: 정적 이미지로 빠른 로딩과 범용성을, 인터랙티브로 탐색적 이해를, 애니메이션으로 과정(process) 설명을 담당

---

## 반드시 구분해야 할 것: 리만 기하학과 LLM의 관계

이 자료에서 가장 중요한 메시지는 다음 구분이다.

**❌ 오해**: "리만 기하학이 LLM을 직접 돌린다"
GPT, LLaMA, Gemma 등 주류 LLM은 토큰 임베딩이 $\mathbb{R}^d$에 살고, 어텐션은 유클리드 내적을 계산하며, 손실 함수는 표준 유클리드 그래디언트를 사용하고, 최적화(Adam)는 평탄 파라미터 공간에서 동작한다. **순방향 패스에 리만 메트릭 텐서 $g_{ij}$는 등장하지 않는다.**

**✅ 정확한 설명**: "리만 기하학은 임베딩을 해석하는 강력한 언어다"
리만 기하학은 다음과 같은 **분석 프레임워크**로서 가치를 갖는다:

- **다양체 가설(Manifold Hypothesis)**: 고차원 텍스트 데이터가 저차원 다양체 위에 놓인다는 가설로, 리만 기하학이 이를 연구하는 자연스러운 언어를 제공
- **정보 기하학**: Fisher 정보 행렬이 파라미터 공간에 리만 메트릭을 정의하여 **자연 그래디언트**(Amari, 1998)를 유도하지만, 계산 비용으로 인해 실제 LLM 학습에는 표준 Adam이 사용
- **잠재 의미 다양체**: arXiv:2603.22301(2025)은 LLM 은닉 상태를 리만 부분다양체로 해석하는 프레임워크를 제안 — 아키텍처 변경이 아닌 **해석 도구**
- **특수 아키텍처**: 포앵카레 임베딩, 쌍곡 어텐션 등은 직접 리만 기하학을 사용하지만, 이들은 니치 아키텍처이며 GPT/LLaMA 스타일의 주류가 아님

Robinson et al.(2025, arXiv:2504.01002)은 GPT-2, LLaMA, Mistral의 토큰 임베딩 공간이 **다양체 가설 자체를 위반**함을 발견하기도 했다. 임베딩에 특이점과 비일정 국소 차원이 존재하여 매끄러운 다양체조차 아닐 수 있다는 것이다. 이는 리만 기하학적 해석의 한계를 동시에 보여준다.

---

## 결론: 고등학교 수학에서 LLM까지의 다리

이 자료를 관통하는 핵심 연결 고리는 세 가지다. 첫째, LLM의 모든 연산은 고등학교에서 배우는 **벡터 내적과 행렬곱**의 대규모 확장이다. 어텐션 공식 $\text{softmax}(QK^\top/\sqrt{d_k})V$는 내적, 지수함수, 행렬곱이라는 친숙한 연산만으로 구성된다.

둘째, "King − Man + Woman ≈ Queen"은 아름다운 패턴이지만 **~60% 정확도의 경험적 관찰**이며, Levy & Goldberg가 보여준 것처럼 분포 의미론의 본질적 성질이지 신경망만의 마법이 아니다. 수학 교육에서 이런 구분 — 법칙 vs 패턴, 필연 vs 경향 — 은 과학적 사고의 근간이다.

셋째, 유클리드 기하학은 LLM의 **실행 환경**이고, 리만 기하학과 쌍곡 기하학은 그 결과를 **이해하는 렌즈**다. 5차원 포앵카레 임베딩이 200차원 유클리드를 압도하는 결과(MAP 0.823 vs 0.168)는 올바른 기하학적 틀의 선택이 차원 수보다 중요할 수 있음을 보여주며, 이것이 비유클리드 기하학을 공부할 가치가 있는 이유다.