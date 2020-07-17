const CDP = require('chrome-remote-interface')

async function chrome() {
  console.log(111)
  let client
  try {
    // connect to endpoint
    client = await CDP()
    // extract domains
    const { Network, Page, Runtime } = client
    // setup handlers
    // enable events then start!
    await Network.enable()
    await Page.enable()
    await Runtime.enable()
    await Page.navigate({
      url:
        'http://localhost:9222/devtools/inspector.html?ws=localhost:9222/devtools/page/90E45A17C5920AA71D3E4EA58B6E099C'
    })
    await Page.loadEventFired()
    const result = await Runtime.evaluate({ expression: 'Core.LogonStore' })

    console.log(result)
  } catch (err) {
    console.error(err)
  } finally {
    if (client) {
      await client.close()
    }
  }
}

chrome()
