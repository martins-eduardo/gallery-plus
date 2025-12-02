import { useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'
import { api } from '../../../helpers/api'

export default function usePhotosAlbums() {
  const queryClient = useQueryClient()
  async function managePhotoOnAlbum(photoId: string, albumsIds: string[]) {
    try {
      await api.put(`/photos/${photoId}/albums`, {
        albumsIds,
      })

      queryClient.invalidateQueries({ queryKey: ['photo', photoId] })
      queryClient.invalidateQueries({ queryKey: ['photo'] })
      toast.success('Álbuns atualizados com sucesso!')
    } catch (error) {
      toast.error('Erros ao gerenciar álbuns da foto...')
      throw error
    }
  }
  return {
    managePhotoOnAlbum,
  }
}
