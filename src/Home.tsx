import { Button, Container, Typography, ListItem, ListItemText, List, Box, Switch} from '@mui/material';
import { useRecoilState } from 'recoil';
import { paletteModeState, themeState } from './state';
import { lightTheme, darkTheme} from './theme'

function Home(){
  const [theme, setTheme ] = useRecoilState(themeState);
  const [paletteMode, setpaletteMode ] = useRecoilState(paletteModeState);
  const toglePaletteMode = () => {
    if (paletteMode === 'dark') {
      setpaletteMode('light');
      setTheme(lightTheme);
    } else {
      setpaletteMode('dark');
      setTheme(darkTheme);
    }
  }

  return (<>
  <Box sx={{ display: 'flex', height: '100vh', fontFamily: 'Noto Sans JP'}}>
    <Box component='nav' bgcolor={`${theme.drawer}`}>
      <List sx={{mt: 1}}>
        <ListItem button>
          <ListItemText primary={'証明書生成'} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={'このアプリについて'} />
        </ListItem>
      </List>
    </Box>
    <Box component='main' sx={{ flexGrow: 1, mt: 1}}>
      <Container fixed>
        <Typography variant='h1'>h1</Typography>
        <Typography variant='h2'>h2</Typography>
        <Typography variant='h3'>h3</Typography>
        <Typography>Reactアプリのサンプルです。</Typography>
        <Switch color="secondary" />
        <Button variant='contained' onClick={()=>{
        console.log('click')
        toglePaletteMode();
      }}>
        パレット変更
      </Button>
      </Container>
    </Box> 
  </Box>
  </>)
}

export default Home;