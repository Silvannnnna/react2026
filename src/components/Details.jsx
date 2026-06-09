import { useParams } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box'

const Details = ({ users }) => {
    const { username } = useParams()
    const user = users.find((u) => u.username === username)

    if (!user) return <Typography sx={{ m: 4 }}>Usuario no encontrado.</Typography>

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Card sx={{ minWidth: 300 }}>
                <CardContent>
                    <Typography variant="h5" gutterBottom>Detalle de usuario</Typography>
                    <Typography><strong>Nombre:</strong> {user.name}</Typography>
                    <Typography><strong>Usuario:</strong> {user.username}</Typography>
                </CardContent>
            </Card>
        </Box>
    )
}

export default Details
