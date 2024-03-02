import { User } from "@/db/user/interface"
import { autorun, makeAutoObservable } from "mobx"
import { data as dataWithMsg } from "@/data/matches_w_msg"
import { data as dataNoMsg } from "@/data/matches_mo_msg"

class Matches {
  matchesWithMsg: any[] = [...dataWithMsg]
  matchesNoMsg: any[] = [...dataNoMsg]

  constructor() {
    makeAutoObservable(this)
  }

  setMatchesWithMsg = (matches: any[]) => {
    this.matchesWithMsg = matches
  }

  setMatchesNoMsg = (matches: any[]) => {
    this.matchesNoMsg = matches
  }
}

const MatchesStore = new Matches()
export default MatchesStore

autorun(() => {
  console.log(MatchesStore.matchesNoMsg)
  console.log(MatchesStore.matchesWithMsg)
})
