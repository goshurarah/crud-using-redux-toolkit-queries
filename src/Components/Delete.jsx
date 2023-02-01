import * as React from 'react'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Fab from "@mui/material/Fab";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from '@mui/material/Stack';
import EditIcon from '@mui/icons-material/Edit';

import { Link } from 'react-router-dom';
import { useGetAllPostQuery, useDeletePostMutation } from "../services/Api";

function Delete() {
  let { isLoading, isError, data, refetch } = useGetAllPostQuery()
  let [DelFunc] = useDeletePostMutation()
  return (
    <>
      {isLoading && <Grid
        container
        direction="row" description
        justifyContent="center"
        alignItems="center"
      >
        <Paper elevation={3} sx={{
          minWidth: 'fit-content',
          width: '17rem',
          margin: '2rem',
          borderRadius: '1rem'
        }} >
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 2, maxWidth: '100%', display: 'flex', direction: 'column', justifyContent: 'center' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              InputProps={{
                readOnly: true,
              }}
              value='Data is Loading...'
              label="Loading..."
              color="secondary"
              focused
            />
          </Box>
        </Paper>
      </Grid>}

      {isError && <Grid
        container
        direction="row" description
        justifyContent="center"
        alignItems="center"
      >
        <Paper elevation={3} sx={{
          minWidth: 'fit-content',
          width: '17rem',
          margin: '2rem',
          borderRadius: '1rem'
        }} >
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 2, maxWidth: '100%', display: 'flex', direction: 'column', justifyContent: 'center' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              InputProps={{
                readOnly: true,
              }}
              value='An Error Occured'
              label="Error"
              color="secondary"
              focused
            />
          </Box>
        </Paper>
      </Grid>}

      {data && <Grid
        container
        direction="row" description
        justifyContent="center"
        alignItems="center"
      >{data.map((items, index) => {
        return (
          <Paper elevation={3} sx={{
            minWidth: 'fit-content',
            width: '17rem',
            margin: '2rem',
            borderRadius: '1rem'
          }} >
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 2, maxWidth: '100%', display: 'flex', direction: 'column', justifyContent: 'center' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                InputProps={{
                  readOnly: true,
                }}
                value={items.id}
                label="Id"
                color="secondary"
                focused
              />
              <TextField
                InputProps={{
                  readOnly: true,
                }}
                value={items.title}
                label="Title"
                multiline
                rows={3}
                color="secondary"
                focused
              />
              <TextField
                InputProps={{
                  readOnly: true,
                }}
                value={items.body}
                label="Body"
                multiline
                rows={3}
                color="secondary"
                focused
              />
            </Box>
            <Stack sx={{ justifyContent: 'center', pb: 1, position: 'bottom' }} direction="row" spacing={2}>
              <Fab size="small" color="secondary" aria-label="delete"
                onClick={() => {
                  DelFunc(items.id)
                  refetch()
                }}
              >
                <Tooltip title="Delete" arrow >
                  <DeleteIcon />
                </Tooltip>
              </Fab>
              <Link to={`/Update/${items.id}`}>
                <Fab size="small" color="secondary" aria-label="edit">
                  <Tooltip title="Edit" arrow >
                    <EditIcon />
                  </Tooltip>
                </Fab>
              </Link>
            </Stack>
          </Paper>
        )
      })}
      </Grid>}
    </>
  );
}
export default Delete