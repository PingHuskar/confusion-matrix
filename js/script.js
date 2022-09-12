const searchParam = new URLSearchParams(location.search)
const init = () => {
    document.getElementById('TPs').innerText = searchParam.get('TP') || "2"
    document.getElementById('TNs').innerText = searchParam.get('TN') || "1"
    document.getElementById('FPs').innerText = searchParam.get('FP') || "1"
    document.getElementById('FNs').innerText = searchParam.get('FN') || "0"
    main()
}
const main = () => {
    // `
    const numRegex = /^\d+$/
    if (!(numRegex.test(document.getElementById('TPs').innerText))) {
        document.getElementById('TPs').innerText = 0
    }
    if (!(numRegex.test(document.getElementById('TNs').innerText))) {
        document.getElementById('TNs').innerText = 0
    }
    if (!(numRegex.test(document.getElementById('FPs').innerText))) {
        document.getElementById('FPs').innerText = 0
    }
    if (!(numRegex.test(document.getElementById('FNs').innerText))) {
        document.getElementById('FNs').innerText = 0
    }
    const TPs = parseInt(document.getElementById('TPs').innerText)
    const TNs = parseInt(document.getElementById('TNs').innerText)
    const FPs = parseInt(document.getElementById('FPs').innerText)
    const FNs = parseInt(document.getElementById('FNs').innerText)
    
    document.getElementById('accuracyCal1').innerHTML = `(<span class="TPs">${TPs}</span> + <span class="TNs">${TNs}</span>) / (<span class="TPs">${TPs}</span> + <span class="TNs">${TNs}</span> + <span class="FPs">${FPs}</span> + <span class="FNs">${FNs}</span>) * 100`
    document.getElementById('accuracyCal2').innerText = `(${TPs+TNs}) / (${TPs + TNs + FPs + FNs}) * 100`
    const accuracy = ((TPs + TNs) / (TPs + TNs + FPs + FNs) * 100)
    document.getElementById('accuracy').innerText = accuracy.toFixed(2)
    
    document.getElementById('precisionCal1').innerHTML = `(<span class="TPs">${TPs}</span> / (<span class="TPs">${TPs}</span> + <span class="FPs">${FPs}</span>) ) * 100`
    document.getElementById('precisionCal2').innerText = `(${TPs} / ${TPs + FPs}) * 100`
    const precision = ((TPs) / (TPs + FPs) * 100)
    document.getElementById('precision').innerText = precision.toFixed(2)
    
    document.getElementById('specificityCal1').innerHTML = `(<span class="TNs">${TNs}</span> / (<span class="TNs">${TNs}</span> + <span class="FPs">${FPs}</span>) ) * 100`
    document.getElementById('specificityCal2').innerText = `(${TNs} / ${TNs + FPs}) * 100`
    const specificity = ((TNs) / (TNs + FPs) * 100)
    document.getElementById('specificity').innerText = specificity.toFixed(2)
    
    document.getElementById('recallCal1').innerHTML = `(<span class="TPs">${TPs}</span> / (<span class="TPs">${TPs}</span> + <span class="FNs">${FNs}</span>) ) * 100`
    document.getElementById('recallCal2').innerText = `(${TPs} / ${TPs + FNs}) * 100`
    const recall = ((TPs) / (TPs + FNs) * 100)
    document.getElementById('recall').innerText = recall.toFixed(2)
    
    document.getElementById('FMeasureCal1').innerHTML = `(2*${recall.toFixed(2)}*${precision.toFixed(2)})/(${recall.toFixed(2)}+${precision.toFixed(2)})`
    document.getElementById('FMeasureCal2').innerText = `${(2*recall*precision).toFixed(2)}/${(recall+precision).toFixed(2)}`
    const FMeasure = (2*recall*precision)/(recall+precision)
    document.getElementById('FMeasure').innerText = FMeasure.toFixed(2)
}
init()

TweenMax.from('h1',1, {
    x:1000,ease:Power2.easeOut
})
TweenMax.from('table',1, {
    y:2000,ease:Power2.easeOut,delay:0.5
})
TweenMax.from('.stats',1, {
    y:2000,ease:Power2.easeOut,delay:1
})