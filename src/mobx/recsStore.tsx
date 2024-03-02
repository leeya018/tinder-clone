import { User } from "@/db/user/interface"
import { autorun, makeAutoObservable } from "mobx"

const data: User[] = [
  {
    id: "1",
    name: "melon",
    age: 22,
    bio: "Movie buff looking for someone special to watch films with. Avid investor and proud cat dad. Electronic music aficionado and gamer. Let's chat and see where it takes us 😺",
    location: {
      lon: 32,
      lat: 34,
    },
    images: [
      " https://images-ssl.gotinder.com/u/csKTmBR7fKsVgPVwvRe1Zh/j6XVwjBeepYvNwWSrRc67L.jpeg?Policy=eyJTdGF0ZW1lbnQiOiBbeyJSZXNvdXJjZSI6IiovdS9jc0tUbUJSN2ZLc1ZnUFZ3dlJlMVpoLyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3MDk3MDc0MDl9fX1dfQ__&Signature=d3~OOrEUoegnaCDESBrvpAcybW5Ql~1PSeit~iDtAKplxTsMFkBKYReN~JX~tpaZUU~IkwB2FW-a2Uc7Jsvl0Uqvr664U05c3xxMNYWYJC8i3grpaj219tS8uGj6~X4dbMgRuGTP5uIC5lrX8GuxTrxt-3-C2Mzq7Ege8Kobul1bYxytAKOTAOXmmtlRSLETA6FCNS1smx~zsDc4VxNff5rO6~kc4lp4KovP6aowZuuIExdoYTfV4SNwAenkkpON2LAT9n61BRSSJer8SH71W2t7knvySPF~9A2JPoDe9XJgZUnsj4qgC6J1jEeXviFJjXcP6UbdtvglJbbB3rsUNA__&Key-Pair-Id=K368TLDEUPA6OI",
      " https://images-ssl.gotinder.com/u/v5mdtLdA6Q2v9g5jVXoBfM/xzNSPpxyo5KsbFhZ6Razmh.jpeg?Policy=eyJTdGF0ZW1lbnQiOiBbeyJSZXNvdXJjZSI6IiovdS92NW1kdExkQTZRMnY5ZzVqVlhvQmZNLyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3MDk3Mjc2MjV9fX1dfQ__&Signature=Hl58c3o~mn4TXmr4bwqtmluToptn6-y5Y15T1J7Tes07yH1QZvcqbPHhyAUe5CjLxiYsCDXMNKqqE6n73YbTaM8nZaSmPDZNbO9SRcc5j8eejlMaww1-KiJ3D~F3xdJj0D0-iYgVHWzwg7otXbvrqU9w4p4BuvkJrgBLZzJl4MKQPYBB9Pv4FuNRkQ1GlTARv3oZz96lxB~Pfevxn8KImKUzFkcutO7K93SgWOhNrun0JYoCoI-n5-AsuErjFZi3Pd0q39dxA4b7Fx8LQ4CgDDItHYxcKtdlsJ451YREowwVqi7wC6Gc4aZs5C-sWGOSpIAOWcoXPtpJehsIpaIaSQ__&Key-Pair-Id=K368TLDEUPA6OI",
      " https://images-ssl.gotinder.com/u/qYZBXBhfYdH6ykZaXs3m3R/9pXMHhcGr8U3qZ5CdfGZhm.jpeg?Policy=eyJTdGF0ZW1lbnQiOiBbeyJSZXNvdXJjZSI6IiovdS9xWVpCWEJoZllkSDZ5a1phWHMzbTNSLyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3MDk3MTM3ODV9fX1dfQ__&Signature=e7vUG8iYEc5efFCDjJnhbzXtLGYNWfjKp0fpHEKmL99HHUnq3DP65rsvgcfprMvrhvtegRA91pz21O-vOU5xSvnlyr-LZaxc4fUc3nhJtasayUI0cN11uMQ5drdA6PYCth8mH2~zI0hm1QTQ5bBWbXxGtgCoDDWA~eO7reR5DP21rUg~jLQBkzTpSzRckMbACYvp6Y79uT5iu43lLZ-LggRl-AMaudh1aouZ6WRQaqDBpkr7QEwXPYCP7guLret7LD-GoeBzmb-rp1C916voz4NvtSufYaYPKhtUKyX~WJNXaKUkNpA9QZmakdxupu0cF18EAQK32-MZOwUehrPXJw__&Key-Pair-Id=K368TLDEUPA6OI",
      " https://images-ssl.gotinder.com/u/2asUVNfDTmixRsQYqjTXJS/6N2235Kgynvhv1XrHru4H9.jpeg?Policy=eyJTdGF0ZW1lbnQiOiBbeyJSZXNvdXJjZSI6IiovdS8yYXNVVk5mRFRtaXhSc1FZcWpUWEpTLyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3MDk3NDY0ODF9fX1dfQ__&Signature=TP6hyWUDMrW-1iipDOZ1hzEhg1FJzWnMoZxcacgtmTgjEVk0Rh9m6tn5CJgMPoBXp1BPfTnT9FWdLXKPtDs~Zn0yaXKL~0bAF1ZJ5pD4-Yon3J-sLTo3nmvTIZyz7RRIBiUanaXTk3BH97fWfIoSPEh~QvcuLY2l-t3~-2GXg~VHyFz2RcgQrEWmEz5zN6H1jtyGgc-~T82DkN8bFMY91CIpFLI81Zxs4tnMaKfjOkHwb0UjiD~E9GAWZGQfS9NiHrXqIN1Xhmg-vVkUpYHWuozlZrb39QhuQoH5KMKZpqjrEd3zWovPaG9Zh-ca8fb6uvUFBhPRNWTK9FRiTDCVmg__&Key-Pair-Id=K368TLDEUPA6OI",
      " https://images-ssl.gotinder.com/u/h5shNmNn4hVdEjZ2SpV8Ct/xo3aj3GzaGZ6VWyNntebxk.jpeg?Policy=eyJTdGF0ZW1lbnQiOiBbeyJSZXNvdXJjZSI6IiovdS9oNXNoTm1ObjRoVmRFaloyU3BWOEN0LyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3MDk2OTQ5NzR9fX1dfQ__&Signature=NSGCxQDFZsKTXz1xdcnJXoE4hpLSVRXnnbakmfrrEWh6y9RoX-FEXDEggpjFxriuAGvyBqdaNXdab0gPwQyaxmmuAw0bNNYkjqrM6ldYgfeLkhE7OVQyrVAc-Lr1WWLSKMXRHQS8y6iWNYQ34toLRvy55iZKLXm9snywSZ8NFGmLB6CBFTFUvZRKuQnPwCdbhFsFFi7-GdqZB50ZnFxah6SMhsLW3zpkVTcHfkkxxU3HzipQ2jUyvV9V3jsw3s7nkC0k8KMvGorF9TbiIlkFfti-SGGCKABtvaVnEV7kol~fkbjT5OutK-PGcMZagEQw0onjIEgKJNvT7SQyyseZqw__&Key-Pair-Id=K368TLDEUPA6OI",
      " https://images-ssl.gotinder.com/u/wt8F1AeFXs4qYHhZUeAtAG/74LS6zEw4BmPZBRLjBLdLy.jpeg?Policy=eyJTdGF0ZW1lbnQiOiBbeyJSZXNvdXJjZSI6IiovdS93dDhGMUFlRlhzNHFZSGhaVWVBdEFHLyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3MDk3MTAxNjl9fX1dfQ__&Signature=TXIjHzdSDHLBMWb2G-tCqWSZADvMTrNJd1EQ-IyLZsZt5LWb4Rkndjezf6M8e5aaedxZD7mwvHnWOa7YbO~nfkhqFIZ46jUfSeEc~VBoe8ZzbHJo~xbeoZqTh8rErh3zLlY0yXcdZf7V9YWZNNC6tcMI9HrHQ3yBoCAqRd0rI2snle1QLLWq37hei4V-5-wU1CHfW5ydqzZkTywfx9-oCt11tdPJwmvR3dhVs3DP-cAgqLq8kZ~P5gQOXKT5cpVSwJwnHp30ihNKGfdb4HFs8UZrRISonn-BqwnSOqFxF-~MoPdJ93GKmVU6s90Cs7AuPvGOdqqIwAQAyjHkQDd0DQ__&Key-Pair-Id=K368TLDEUPA6OI",
    ],
    city: "Beer Sheva",
  },
]
class Recs {
  recs: User[] = [...data]

  constructor() {
    makeAutoObservable(this)
  }

  setRecs = (recs: User[]) => {
    this.recs = recs
  }
}

const recsStore = new Recs()
export default recsStore

autorun(() => {
  console.log(recsStore.recs)
})
