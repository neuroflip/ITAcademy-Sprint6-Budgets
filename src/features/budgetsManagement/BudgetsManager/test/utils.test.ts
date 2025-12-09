import { describe, expect, it } from "vitest";
import { calculateTotalCost } from "../helpers/utils";

const servicesWeb2Extras = [{
    "id": 0,
    "title": "Web",
    "description": "web description",
    "isChecked": true,
    "cost": 500,
    "extras": [{
        "id": 0,
        "text": "Pages number",
        "value": 1
    }, {
        "id": 1,
        "text": "Languages number",
        "value": 1
    }]
}];

const servicesWebnotChecked = [{
    "id": 0,
    "title": "Web",
    "description": "web description",
    "isChecked": false,
    "cost": 500,
    "extras": [{
        "id": 0,
        "text": "Pages number",
        "value": 1
    }, {
        "id": 1,
        "text": "Languages number",
        "value": 1
    }]
}];

const servicesAllChecked = [{
    "id": 0,
    "title": "Web",
    "description": "web description",
    "isChecked": true,
    "cost": 500,
    "extras": [{
        "id": 0,
        "text": "Pages number",
        "value": 1
    }, {
        "id": 1,
        "text": "Languages number",
        "value": 1
    }]
},{
    "id": 1,
    "title": "Seo",
    "description": "Seo description",
    "isChecked": true,
    "cost": 500,
    "extras": []
},{
    "id": 2,
    "title": "Ads",
    "description": "Ads description",
    "isChecked": true,
    "cost": 500,
    "extras": []
}];

describe('BudgetManager utils calculateTotalCost functionality', () => {
  it('calculates correctly the budget totals when web is selected, without discount', () => {
    const total = calculateTotalCost(servicesWeb2Extras, 0);

    expect(total).toBe(560);
  });

  it('calculates correctly the budget totals when web is selected, with discount', () => {
    const total = calculateTotalCost(servicesWeb2Extras, 0.2);

    expect(total).toBe(448);
  });

  it('does not calculate a service if it is not checked', () => {
    const total = calculateTotalCost(servicesWebnotChecked, 0);

    expect(total).toBe(0);
  });

  it('calculates correctly the budget totals for all services selected, without discount', () => {
    const total = calculateTotalCost(servicesAllChecked, 0);

    expect(total).toBe(1560);
  });

  it('calculates correctly the budget totals for all services selected, with discount', () => {
    const total = calculateTotalCost(servicesAllChecked, 0.5);

    expect(total).toBe(780);
  });
})