const Queue = require("./Queue");

class StarshipEnterprise {
  constructor(officerId = null, officerName = null, reportTo = null) {
    this.officerId = officerId;
    this.officerName = officerName;
    this.reportTo = reportTo; // the officer that the new officer reports to
    this.leftReport = null;
    this.rightReport = null;
  }

  assignOfficer(officerId, officerName) {
    /*
    This method should accept an officer id and name as its arguments and assign
    a new officer to an existing officer based on experience level (as indicated by
    the officer's id). If there's no existing officer to assign the new officer to,
    then the new officer is the captain (e.g., Captain Picard)
    */

    if (!this.officerId || !this.officerName) {
      // If the tree is empty then the officer is inserted as the root node
      this.officerId = officerId;
      this.officerName = officerName;
    }

    // If the officerId is less than the node's id, then the new node needs to live in the left-hand branch.
    else if (officerId < this.officerId) {
      // If node has no left-child then insert new node as left child
      if (!this.leftReport) {
        this.leftReport = new StarshipEnterprise(officerId, officerName, this);
      }
      // If node has a left-child, then recursively call the assignOfficer() method
      else {
        this.leftReport.assignOfficer(officerId, officerName);
      }
    }

    // If the officerId is greater than the node's id, then the new node needs to live in the right-side branch.
    else {
      if (!this.rightReport) {
        // If node has no right-child then insert new node as right child
        this.rightReport = new StarshipEnterprise(officerId, officerName, this);
      }
      else {
        // If node has a right-child, then recursively call the assignOfficer() method
        this.rightReport.assignOfficer(officerId, officerName);
      }
    }

  }

  findOfficersWithNoDirectReports(values = []) {
    /*
    This method should return an array of officers who do not have direct reports.
    For example: [ "Lieutenant Security-Officer", "Lt. Cmdr. LaForge", "Lieutenant Selar" ]
    */

    return values;
  }

  listOfficersByExperience(officerNames = []) {
    /*
    This method should return an array of officers in increasing order of military experience.
    For example: [ "Lieutenant Selar", "Lt. Cmdr. Crusher", "Commander Data", "Captain Picard",
    "Lt. Cmdr. LaForge", "Commander Riker", "Lieutenant Security-Officer", "Lt. Cmdr. Worf", ]
    */
    return officerNames;
  }

  listOfficersByRank(tree, rankedOfficers = {}) {
    /*
    This method should take the tree of commanding officers above and outline the ranking
    officers in their ranking order.
    Your method should return an object where each property represents the numerical rank and
    each value consists of an array of officers (in any experience order) of a particular rank.
    */
    return rankedOfficers;
  }
}

module.exports = StarshipEnterprise;
