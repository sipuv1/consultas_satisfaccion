export default function DashboardEticos() {
  const kpis = [
    {
      title: 'Promedio satisfacción',
      value: '4.8 ⭐',
      description: 'Nivel general de satisfacción'
    },
    {
      title: 'Total respuestas',
      value: '1,284',
      description: 'Encuestas registradas'
    },
    {
      title: 'Recomendación',
      value: '92%',
      description: 'Usuarios que recomendarían ETICOS'
    },
    {
      title: 'Comentarios negativos',
      value: '4%',
      description: 'Alertas críticas detectadas'
    }
  ]

  const ranking = [
    {
      asesor: 'Laura Gómez',
      puntuacion: '4.9 ⭐'
    },
    {
      asesor: 'Carlos Pérez',
      puntuacion: '4.8 ⭐'
    },
    {
      asesor: 'Ana Rodríguez',
      puntuacion: '4.7 ⭐'
    }
  ]

  const tendencias = [
    { mes: 'Ene', valor: 4.1 },
    { mes: 'Feb', valor: 4.3 },
    { mes: 'Mar', valor: 4.5 },
    { mes: 'Abr', valor: 4.6 },
    { mes: 'May', valor: 4.8 }
  ]

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-7xl mx-auto">

        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8 border border-slate-200">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-4xl font-bold text-blue-900">
                Dashboard ETICOS
              </h1>

              <p className="text-slate-500 mt-2 text-lg">
                Sistema de satisfacción y experiencia del usuario
              </p>
            </div>

            <div className="border-2 border-dashed border-blue-800 rounded-2xl h-24 w-64 flex items-center justify-center text-blue-800 font-semibold">
              ESPACIO PARA LOGO ETICOS
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
          {kpis.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-6 border border-slate-200 hover:scale-105 transition-all"
            >
              <h2 className="text-slate-500 text-sm mb-2">
                {item.title}
              </h2>

              <div className="text-4xl font-bold text-blue-900 mb-3">
                {item.value}
              </div>

              <p className="text-slate-400 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

          <div className="xl:col-span-2 bg-white rounded-3xl shadow-xl p-8 border border-slate-200">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-blue-900">
                Tendencia mensual
              </h2>

              <div className="text-sm text-slate-500">
                Últimos 5 meses
              </div>
            </div>

            <div className="space-y-6">
              {tendencias.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-slate-700">
                      {item.mes}
                    </span>

                    <span className="font-bold text-blue-900">
                      {item.valor} ⭐
                    </span>
                  </div>

                  <div className="w-full bg-slate-200 rounded-full h-4 overflow-hidden">
                    <div
                      className="bg-blue-800 h-4 rounded-full transition-all"
                      style={{ width: `${item.valor * 20}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-200">
            <h2 className="text-2xl font-bold text-blue-900 mb-8">
              Ranking asesores
            </h2>

            <div className="space-y-5">
              {ranking.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-slate-100 rounded-2xl p-4"
                >
                  <div>
                    <div className="font-semibold text-slate-800">
                      #{index + 1} {item.asesor}
                    </div>

                    <div className="text-sm text-slate-500">
                      Atención al cliente
                    </div>
                  </div>

                  <div className="text-blue-900 font-bold text-lg">
                    {item.puntuacion}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-200">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">
              Comentarios negativos
            </h2>

            <div className="space-y-4">
              <div className="bg-red-50 border border-red-200 rounded-2xl p-4">
                <div className="font-semibold text-red-700">
                  Tiempo de espera elevado
                </div>

                <p className="text-red-500 text-sm mt-2">
                  Usuario reporta demora superior a 30 minutos.
                </p>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-2xl p-4">
                <div className="font-semibold text-red-700">
                  Mala atención
                </div>

                <p className="text-red-500 text-sm mt-2">
                  Cliente indica falta de claridad en la información.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-200">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">
              Estado general del servicio
            </h2>

            <div className="flex flex-col gap-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-slate-700">
                    Satisfacción general
                  </span>

                  <span className="font-bold text-blue-900">
                    96%
                  </span>
                </div>

                <div className="w-full bg-slate-200 rounded-full h-4">
                  <div className="bg-blue-800 h-4 rounded-full w-[96%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-slate-700">
                    Recomendación
                  </span>

                  <span className="font-bold text-blue-900">
                    92%
                  </span>
                </div>

                <div className="w-full bg-slate-200 rounded-full h-4">
                  <div className="bg-blue-800 h-4 rounded-full w-[92%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-slate-700">
                    Calidad atención
                  </span>

                  <span className="font-bold text-blue-900">
                    94%
                  </span>
                </div>

                <div className="w-full bg-slate-200 rounded-full h-4">
                  <div className="bg-blue-800 h-4 rounded-full w-[94%]" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
