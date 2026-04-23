import { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import CircularProgress from '@mui/material/CircularProgress'
import Alert from '@mui/material/Alert'
import DeleteIcon from '@mui/icons-material/Delete'
import Divider from '@mui/material/Divider'

const emptyForm = { name: '', username: '', password: '' }

function Info() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [form, setForm] = useState(emptyForm)
  const [submitting, setSubmitting] = useState(false)

  const fetchUsers = () => {
    setLoading(true)
    fetch('/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch(() => setError('No se pudo cargar la lista de usuarios'))
      .finally(() => setLoading(false))
  }

  useEffect(() => { fetchUsers() }, [])

  const handleAdd = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      const res = await fetch('/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setForm(emptyForm)
      fetchUsers()
    } catch {
      setError('No se pudo agregar el usuario')
    } finally {
      setSubmitting(false)
    }
  }

  const handleDelete = async (id) => {
    try {
      await fetch(`/users/${id}`, { method: 'DELETE' })
      setUsers((prev) => prev.filter((u) => u._id !== id))
    } catch {
      setError('No se pudo eliminar el usuario')
    }
  }

  return (
    <Box sx={{ maxWidth: 500, mx: 'auto', mt: 4, px: 2 }}>
      <Typography variant="h5" gutterBottom>Usuarios</Typography>

      {error && <Alert severity="error" onClose={() => setError('')} sx={{ mb: 2 }}>{error}</Alert>}

      <Stack
        component="form"
        onSubmit={handleAdd}
        spacing={2}
        sx={{ mb: 3 }}
      >
        <Typography variant="subtitle1">Agregar usuario</Typography>
        <TextField
          label="Nombre"
          size="small"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <TextField
          label="Usuario"
          size="small"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          required
        />
        <TextField
          label="Contraseña"
          size="small"
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
        <Button type="submit" variant="contained" disabled={submitting}>
          {submitting ? 'Agregando...' : 'Agregar'}
        </Button>
      </Stack>

      <Divider sx={{ mb: 2 }} />

      {loading ? (
        <CircularProgress />
      ) : (
        <List>
          {users.length === 0 && (
            <Typography color="text.secondary">No hay usuarios registrados.</Typography>
          )}
          {users.map((u) => (
            <ListItem
              key={u._id}
              divider
              secondaryAction={
                <IconButton edge="end" onClick={() => handleDelete(u._id)}>
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText primary={u.name} secondary={u.username} />
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  )
}

export default Info
