# GPT2-HarryPotterFiction
[![Run on Ainize](https://ainize.ai/images/run_on_ainize_button.svg)](https://master-gpt2-harry-potter-msh1273.endpoint.ainize.ai)

## GPT-2?
GPT-2(Generative Pre-Training 2)란 OpenAI에서 만든 오픈소스 인공지능 모델입니다. GPT-2 는 텍스트를 번역하고, 질문에 답하고, 구문을 번역하고, 문장을 만들어 줍니다.

## Motive
가장 좋아하는 영화가 무엇이냐 묻는다면 저의 대답은 단연 해리포터입니다. 평소 한번본 영화는 다시 보지 않는 사람이지만 소설, 영화 가리지 않고 해마다 다시 보게 되거든요. 해리포터의 잘 만들어진 세계관은 더 깊은 상상을 하게 되고, 다양한 스토리가 얼마든지 연출될 수 있다는 생각하기 때문에 이를 GPT-2모델에 적용하고 싶었습니다.
## How to make(Dataset)
Huggingface에서 pre-trained모델을 사용했습니다. 사전학습된 GPT-2텍스트 생성모델로 상위 100개의 해리포터 팬 픽션 스토리에서 나만의 해리포터이야기를 생성할 수 있습니다. 
* 링크: <https://huggingface.co/ceostroff/harry-potter-gpt2-fanfiction>
---
- language: en
- tags: harry-potter
- license: mit
---
## How to use
* 키워드를 입력하고 Start Story버튼을 누르면 키워드로 시작하는 문장을 생성합니다. (ex: Harry loves Herimone)
* 영어만 사용가능합니다.
* 생성되는 문장은 150 ~ 200글자로 생성됩니다.
* 더 많은 이야기를 추가 생성하시려면 More Story버튼을 누릅니다.
![s1](/static/s1.png)

## 추가
1. 샘플앱에서 계속 문장 생성시 페이지가 길어지는 것에서 지정된 범위 내 스크롤바 추가.
2. 도커파일 수정. (로컬에선 도커 실행이 되지만 ainize에서 배포오류 문제. (2021/6/23)
## GKE 샘플앱 배포 Harrypotter fanfiction
* 링크: <http://35.197.13.39/>
