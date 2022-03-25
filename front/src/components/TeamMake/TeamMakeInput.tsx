import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { postTeamInfo } from '../../axios/axios';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { updateTeamAction } from '../../action/createAction';
import { getTeamInfo } from '../../axios/axios';

const Div = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  overflow-x: hidden;
`;

// flex-direction 을 row 로 해주기 위한 div
const Div2 = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const TeamInput = () => {
  const dispatch = useDispatch();

  async function refreshTeamInfo() {
    try {
      const teamInfo = await getTeamInfo().then((res) => res.data);
      const action = updateTeamAction(teamInfo);
      dispatch(action);
    } catch (err) {
      alert(err.response);
    }
  }
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      teamName: e.target.teamName.value,
      teamIntroduce: e.target.teamIntroduce.value,
    };
    postTeamInfo(data)
      .then(() => {
        refreshTeamInfo();
        navigate('/');
      })
      .catch((err) => {
        alert(err.response);
      });
  };

  return (
    <Div>
      <Div2>
        <Box
          sx={{
            display: 'flex',
            justifyContents: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            width: '450px',
            paddingTop: '20px',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'black', width: 50, height: 50 }}>
            <SportsBasketballIcon sx={{ width: 34, height: 34 }} />
          </Avatar>
          <Typography component="h1" variant="h1">
            팀 생성하기
          </Typography>
          <Typography component="h3" variant="h5">
            팀에 다른 사람들을 초대할 수 있습니다.
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, width: '450px' }}>
            <TextField
              id="teamName"
              label="팀 이름(1글자 ~ 8글자)"
              variant="outlined"
              fullWidth
              name="teamName"
              sx={{
                marginTop: '30px',
                display: 'block',
              }}
            />
            <TextField
              id="teamIntroduce"
              label="팀 소개"
              variant="outlined"
              fullWidth
              name="teamIntroduce"
              multiline
              rows={4}
              sx={{
                marginTop: '30px',
                display: 'block',
              }}
            />

            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              완료
            </Button>
          </Box>
        </Box>
      </Div2>
    </Div>
  );
};

export default TeamInput;
