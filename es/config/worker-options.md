# Opciones para Worker

## worker.format

- **Tipo:** `'es' | 'iife'`
- **Por defecto:** `iife`

  Formato de salida para el paquete de worker.

## worker.plugins

- **Tipo:** [`(Plugin | Plugin[])[]`](./shared-options#plugins)

  Complementos de Vite que se aplican al paquete de worker. Ten en cuenta que [config.plugins](./shared-options#plugins) no se aplica a los workers, debe configurarse aquí en su lugar.

## worker.rollupOptions

- **Tipo:** [`RollupOptions`](https://rollupjs.org/guide/en/#big-list-of-options)

  Opciones de Rollup para crear un paquete de worker de compilación.
