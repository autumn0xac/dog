import { Box, Link, Stack, styled, Typography } from '@mui/material'
// import Button from '../components/Button/Button'
import Logo from '../assets/1.jpg'
import img1 from '../assets/6.jpg'
import img5 from '../assets/5.jpg'
import img7 from '../assets/7.jpg'
import Button from '../components/Button/Button'
// import bg2 from '../assets/2.jpg'
// import bg1 from '../assets/svg/bg1.svg'

const ca = '9kCJx9RHhghso9ZQSsaL12XZTXx1qBJpyUjr6iq1umqj'

const Wrapper = styled(Box)(({ theme }) => ({
  maxWidth: 1360,
  width: '100%',
  margin: 'auto',
  [theme.breakpoints.down('md')]: {
    padding: '20px',
  },
}))

const Img = styled(`img`)(({}) => ({
  maxWidth: '100%',
}))

// const StyledLink = styled(Link)({
//   display: 'block',
//   textDecoration: 'none',
//   '& button': {
//     width: '100%',
//   },
// })

export default function Index() {
  return (
    <Wrapper>
      <Box padding={'10px 0'}>
        <Link underline="none" href="#/">
          <img alt="" style={{ height: 60 }} src={Logo.src} />
        </Link>
      </Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '46% 50%' },
          // gap: '40px',
          alignItems: 'center',
        }}
      >
        <Box>
          <Img src={img1.src} alt="" />

          <Stack
            mt={2}
            spacing={1}
            sx={{
              '& a': {
                color: '#000',
                fontSize: 20,
                fontWeight: 600,
              },
            }}
          >
            <Typography
              fontSize={20}
              sx={{
                wordBreak: 'break-all',
              }}
              fontWeight={600}
            >
              Address: {ca}
            </Typography>

            <Button>
              <Link target="_blank" href={`https://pump.fun/${ca}`}>
                Pump
              </Link>
            </Button>
          </Stack>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gap: '20px',
            paddingLeft: { md: '20px', xs: 0 },
            paddingTop: { md: 0, xs: '20px' },
          }}
        >
          <Img src={img5.src} alt="" />
          <Box position={'relative'}>
            <Img src={img7.src} alt="" />
            <ButtonGroupA />
          </Box>
        </Box>
      </Box>
    </Wrapper>
  )
}

function ButtonGroupA() {
  return (
    <Box
      sx={{
        position: 'absolute',
        right: '2%',
        bottom: '23%',
        zIndex: 10,
        width: '50%',
        height: '50px',
        display: 'grid',
        gridTemplateColumns: '33.3% 33.3% 33.3%',
        gap: '5px',
        '& a': {
          display: 'block',
          height: '50px',
          // background: 'rgba(255,255,255,0.6)',
          cursor: 'pointer',
        },
      }}
    >
      <Link target="_blank" href={`https://dexscreener.com/solana/${ca}`}></Link>
      <Link target="_blank" href="https://twitter.com/Daisyonsolona"></Link>
      <Link target="_blank" href="https://t.me/gmdogsol"></Link>
    </Box>
  )
}
