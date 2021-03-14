module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('css', 'tree')
  
    return {
  
      passthroughFileCopy: true
  
    }
  
  }
