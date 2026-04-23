import { useAuth } from '../context/AuthContext'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box'

const Profile = () => {
  const { user } = useAuth()

  if (!user) return <Typography sx={{ m: 4 }}>No hay usuario autenticado.</Typography>

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
      <Card sx={{ minWidth: 300 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>Perfil</Typography>
          <Typography><strong>Nombre:</strong> {user.name}</Typography>
          <Typography><strong>Usuario:</strong> {user.username}</Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default Profile
