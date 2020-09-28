module.exports = {
  presets: [
    '@babel/presets-react',
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        }
      }
    ]
  ]
}


// module.exports = {
//   presets: [
//     '@babel/preset-react',
//     [
//       '@babel/preset-env',
//       {
//         targets: {
//           node: 'current',
//         },
//       },
//     ],
//   ],
// };