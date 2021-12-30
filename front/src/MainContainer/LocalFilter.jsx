import styled from "styled-components";
import DeadlineFilter from "./DeadlineFilter";


const MainFilter = styled.div`
`;

const MainMatchFilter = styled.div`
`;

const Ul = styled.ul`
    max-width: 1024px;
    width: 80vw;
    margin: 0 auto;
    padding: 10px 10px 20px 10px;
    border-bottom: 1px solid #ddd;
    display: flex;
    justify-content:center;
    li:nth-child(1) {
        margin-left: 30px;
    }
`;

const Li = styled.li`
    font-size: 14px;
    color: #222836;
    padding: 0.347vw 0.69444vw 0.347vw 0.69444vw;
    cursor: pointer;
`;

export default function Filter() {
    const local = ['전체', '서울', '경기', '인천', '대전', '충북', '충남', '대구/경산', '부산', '울산', '경남', '경북', '광주' , '전북', '강원', '제주', '전남'];

    return(
        <div>
    <MainFilter>
        <MainMatchFilter>
            <Ul>
                {local.map((region, idx) => {
                    return (
                        <Li key={idx}>
                            {local[i]}
                        </Li>
                    )
                })}
            </Ul>
        </MainMatchFilter>
    </MainFilter>
    <DeadlineFilter></DeadlineFilter>
    </div>
    )

}