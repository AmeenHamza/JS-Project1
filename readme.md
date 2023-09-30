## Gsap maprange()

* gsap.utils.maprange(minInput, maxInput, minOutput, maxOutput, mapValue)

* map range function ka kaam ye h k for suppose hm kuch values dedete h pehle function mein
* # gsap.utils.maprange(0, 200, 255, 0, 30)

* ab minimum input value 0 h
* maximum input value 200 h 
* minimum output value 255 h
* maximum output value 0 h
* Or jis value ko map karwana h wo 30 h

* ab kia matlab ab aesa nhi k minimum value 0 h to bs 0 per hi wo 255 output dega jo k minimum value input ka minimum output h instead of ye minimum input or maximum input value ko leker jo values in donon k beech mein aainge wo inke output ki values k hisaab se map karwaega
* e.g: minInp 0 h maxInp 200 h ab agr map ki value 30 h to pehle minOut ki value or maxOut ki value dekho 255, 30 h
ab wo dekhega map ki value jo h 30 ab wo pehle minInp or minOut ki values check karega hmne 0 per 255 dia wa h to 0 max value milrahi h hm jitna hm 0 se door jate jainge itni value output ki bhi km hoti jaegi jese 30 h to wese minOut 255 h likin 30 map value ki waja se wo usko 214 k qareeb kardega
* Ab kyunke maxInp k output ki value 0 h to agr map ki value 195 hogi to maxOut ki value 0 h to wo uske qareeb ati jaigi jese 19 se 28 tk