
export default function DashboardEticos({ stats }) {

  const kpis = [
    {
      title: 'Promedio satisfacción',
      value: stats.promedio || '0 ⭐'
    },
    {
      title: 'Total respuestas',
      value: stats.total || '0'
    },
    {
      title: 'Recomendación',
      value: stats.recomendacion || '0%'
    },
    {
      title: 'Comentarios negativos',
      value: stats.negativos || '0%'
    }
  ]

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-7xl mx-auto">

        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
          <h1 className="text-4xl font-bold text-blue-900">
            Dashboard ETICOS
          </h1>

          <p className="text-slate-500 mt-2">
            Métricas de satisfacción del usuario
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {kpis.map((item, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-lg p-6">
              <h2 className="text-slate-500 text-sm">
                {item.title}
              </h2>

              <div className="text-4xl font-bold text-blue-900 mt-4">
                {item.value}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
