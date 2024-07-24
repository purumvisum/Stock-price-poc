# API Cost Comparison for Frontend and Backend Updates

## Backend Updates
- **Update Frequency**: 96 updates per day (every 15 minutes).
- **Total Requests**: 96 requests per day.

## Frontend Updates
- **Update Frequency**: 96 updates per day per user.
- **Number of Users**: 1300 users per day (assuming all users generate requests).
- **Total Requests**: 96 requests/user/day * 1300 users = 124,800 requests per day.

## Cost Comparison for Popular APIs

### IEX Cloud
- **Backend**:
  - **Plan**: Launch (Free) plan allows 500,000 messages/month.
  - **Total Requests**: 96 requests/day * 30 days = 2,880 requests/month.
  - **Cost**: $0 (within free tier).
- **Frontend**:
  - **Plan**: Grow ($100/month) allows 10,000,000 messages/month.
  - **Total Requests**: 124,800 requests/day * 30 days = 3,744,000 requests/month.
  - **Cost**: $100/month (within Grow plan).

### Alpha Vantage
- **Backend**:
  - **Plan**: Free plan allows 500 requests/day.
  - **Total Requests**: 96 requests/day.
  - **Cost**: $0 (within free tier).
- **Frontend**:
  - **Plan**: Ultra ($149.99/month) allows unlimited requests.
  - **Total Requests**: 124,800 requests/day.
  - **Cost**: $149.99/month.

### EOD Historical Data
- **Backend**:
  - **Plan**: Basic plan starts at $19.99/month for 100,000 API requests/day.
  - **Total Requests**: 96 requests/day * 30 days = 2,880 requests/month.
  - **Cost**: $19.99/month.
- **Frontend**:
  - **Plan**: Basic plan starts at $19.99/month for 100,000 API requests/day.
  - **Total Requests**: 124,800 requests/day * 30 days = 3,744,000 requests/month.
  - **Cost**: Likely need higher plan or custom pricing. Estimated $100+ per month.

## Summary
- **Backend Cost**:
  - IEX Cloud: $0/month.
  - Alpha Vantage: $0/month.
  - EOD Historical Data: $19.99/month.
- **Frontend Cost**:
  - IEX Cloud: $100/month.
  - Alpha Vantage: $149.99/month.
  - EOD Historical Data: Estimated $100+ per month.

## Conclusion
Updating stock prices on the backend is significantly cheaper and more manageable in terms of API usage. For instance, using IEX Cloud's free plan or Alpha Vantage's free plan covers the backend updates. On the other hand, frontend updates could cost between $100 and $150 per month, depending on the chosen API.
