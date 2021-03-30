module.exports = {
  //   testPathIgnorePatterns: ['/__generated__'],
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        pageTitle: 'OCI Vocabulary Test Suite',
        // logoImgPath: './logo.png',
        publicPath: '../../docs/testsuite',
        filename: 'index.html',
        expand: true,
      },
    ],
  ],
};
