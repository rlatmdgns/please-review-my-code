import { Layout } from 'components/common/Layout';
import styled from 'styled-components';
import 'github-markdown-css/github-markdown.css';

export const Guide = () => {
  return (
    <Layout>
      <Wrapper className="markdown-body">
        <h2>코드리뷰란?</h2>

        <p>
          새로운 코드에 버그나 에러가 있는지, 또는 <em>조직이 설정한 품질 기준(코드 컨벤션)</em>에 맞는지 평가하는
          것입니다.
          <br />
          코드리뷰 과정은 한쪽 방향의 피드백(one-sided feedback)이 아닙니다. 코드리뷰의 궁극적 목적은 팀원들(참가자들
          양쪽)의 코딩 스킬의 전반적인 향상입니다.
        </p>

        <h2>코드리뷰 시 정해야 할 것</h2>

        <ol>
          <li>코드를 리뷰할 사람 (리뷰어)</li>

          <li>
            코드를 리뷰할 <em>기간</em> (답변을 받을 기간 정하기)
          </li>
          <li>
            코드리뷰 요청을 위한 <em>최소한의 기준</em> (minimal requirements)
          </li>
          <li>
            코드리뷰 <em>답변</em>을 하는 방법 (how feedback should be given)
            <ul>
              <li>
                <em>코드의 긍정적인 면을 먼저 강조</em>합니다.
              </li>
              <li>
                <em>단점에 대한 대안을 제시</em>합니다.
              </li>
              <li>
                질문자가 <em>답변자의 관점을 이해할 수 있고, 필요할 때 대화를 더 이어나갈 정도로</em>{' '}
                <em>충분히 구조적인 답변</em>이어야 합니다.
              </li>
            </ul>
          </li>
        </ol>

        <h2>코드리뷰에 포함하지 않을 범위</h2>

        <ul>
          <li>기능 구현을 모르겠다 (X)</li>
          <li>구글에 물어서 알 수 있는 정보 (X)</li>
        </ul>

        <h2>코드리뷰가 왜 중요한가요?</h2>

        <ul>
          <li>자신의 잘못된 코드 스타일을 교정할 수 있습니다.</li>
          <li>
            충분히 고민했음에도 해결되지 않은 문제를 다른 사람의 도움을 받아 문제가 해결될 가능성을 높일 수 있습니다.
          </li>
          <li>개발을 독학하는 사람들은 개발공부의 효율성을 높일 수 있습니다</li>
          <li>
            (격려하기) 리뷰를 받으면서 ‘나는 답변해주는 사람보다 못해’는 생각에 사로잡히지 마세요
            <ul>
              <li>답변자도 그렇게 되기까지 많은 사람들의 도움(리뷰, 최소한 구글링)을 받았을 거에요</li>
              <li>질문자님이 지금 코드가 어려운 이유는 단순히 절대적 시간의 차이일 뿐이에요.</li>
              <li>
                리뷰어만큼의 시간을 쏟는다면 질문자님도 언젠가 다른 사람들에게 도움을 줄 수 있음을 기억하세요. (그 때가
                지금일 수도 있고요!)
              </li>
            </ul>
          </li>
        </ul>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  padding: 20px;
  border: 1px solid #dedede;
  line-height: 200%;
  margin-top: 30px;

  li {
    list-style-type: circle;
  }

  em {
    font-weight: bold;
    font-style: normal;
  }
`;
