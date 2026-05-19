
import { useEffect, useState } from 'react'
import DashboardEticos from '../components/DashboardEticos'
import { supabase } from '../lib/supabase'

export default function Home() {

  const [stats, setStats] = useState({})

  useEffect(() => {
    obtenerDatos()
  }, [])

  const obtenerDatos = async () => {

    const { data, error } = await supabase
      .from('respuestas')
      .select('*')

    if(error){
      console.log(error)
      return
    }

    const total = data.length || 0

    const promedio =
      total > 0
      ? (
          data.reduce(
            (acc, item) => acc + item.calificacion,
            0
          ) / total
        ).toFixed(1)
      : 0

    const recomendacion =
      total > 0
      ? (
          data.filter(
            item => item.recomendaria === true
          ).length / total * 100
        ).toFixed(0)
      : 0

    const negativos =
      total > 0
      ? (
          data.filter(
            item => item.calificacion <= 2
          ).length / total * 100
        ).toFixed(0)
      : 0

    setStats({
      promedio: promedio + ' ⭐',
      total,
      recomendacion: recomendacion + '%',
      negativos: negativos + '%'
    })
  }

  return <DashboardEticos stats={stats} />
}
