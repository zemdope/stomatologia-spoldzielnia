const React = require('react')
const { MainTemplate } = require('./src/components/templates/MainTemplate')

exports.wrapPageElement = ({ element, props }) => (
  <MainTemplate {...props}>{element}</MainTemplate>
)
