
function findMatching(drivers, string){
    let match = drivers.filter( driver => {
        return driver === string || driver === string.toLowerCase()
    })
   return match 
}


function fuzzyMatch(drivers, string) {
    return drivers.filter( possibleMatch =>
      possibleMatch.toLowerCase().indexOf(string.toLowerCase()) === 0
    )
  }

function matchName(drivers, string){
    return drivers.filter(function(object) { 
        if (object["name"] === string){
        return object 
    }
    })

}