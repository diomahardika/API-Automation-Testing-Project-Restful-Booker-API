# API Testing Project - Restful Booker

This project contains automated API tests for the Restful Booker application using Mocha, Chai, and Supertest.

## Project Structure

```
├── config/
│   └── config.js          # Configuration settings
├── data/
│   └── booking.data.json  # Test data
├── tests/
│   ├── apis/              # API classes
│   │   ├── auth.api.js
│   │   ├── createBooking.api.js
│   │   ├── detailBooking.api.js
│   │   ├── updateBooking.api.js
│   │   ├── deleteBooking.api.js
│   │   └── getBooking.api.js
│   ├── scenarios/         # Individual test scenarios
│   └── suites/           # Complete test suites
├── report/               # Test reports (auto-generated)
├── .env.example         # Environment variables template
└── package.json
```

## Prerequisites

- Node.js (v14 or higher)
- npm

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd coba-test
```

2. Install dependencies:
```bash
npm install
```

3. Setup environment variables:
```bash
cp .env.example .env
```

4. Edit `.env` file with your credentials:
```
ENV_USERNAME=your_username
ENV_PASSWORD=your_password
BASE_URL=https://restful-booker.herokuapp.com
```

## API Endpoints Tested

- **POST /auth** - Authentication
- **GET /booking** - Get all bookings
- **POST /booking** - Create new booking
- **GET /booking/:id** - Get booking details
- **PUT /booking/:id** - Update booking
- **DELETE /booking/:id** - Delete booking

## Test Scripts

### Individual Test Scenarios

```bash
# Authentication test
npm run auth

# Create booking test
npm run create

# Get booking details test
npm run detail

# Get all bookings test
npm run get

# Update booking test
npm run update

# Delete booking test
npm run delete
```

### Complete Test Suite

```bash
# Run complete booking flow test
npm test
```

## Test Data

Test data is stored in [`data/booking.data.json`](data/booking.data.json) and includes:
- `validBooking`: Valid booking data for creation
- `updateBooking`: Updated booking data for modification tests

## Test Reports

After running tests, HTML reports are generated in the `report/` directory using Mochawesome reporter. Open [`report/index.html`](report/index.html) in a browser to view detailed test results.

## API Classes

The project uses a class-based approach for API interactions:

- [`auth`](tests/apis/auth.api.js) - Authentication operations
- [`create`](tests/apis/createBooking.api.js) - Booking creation
- [`detail`](tests/apis/detailBooking.api.js) - Get booking details
- [`getData`](tests/apis/getBooking.api.js) - Get all bookings
- [`update`](tests/apis/updateBooking.api.js) - Update bookings
- [`deleteData`](tests/apis/deleteBooking.api.js) - Delete bookings

## Configuration

Configuration is managed through [`config/config.js`](config/config.js) which loads environment variables and sets up:
- Base URL
- Authentication credentials
- HTTP headers

## Test Flow

The complete test suite ([`tests/suites/herokuApp.spec.js`](tests/suites/herokuApp.spec.js)) follows this flow:

1. **Authentication** - Get auth token
2. **Create Booking** - Create a new booking and verify response
3. **Get Booking Details** - Retrieve and validate booking details
4. **Delete Booking** - Remove the created booking

## Contributing

1. Fork the repository
2. Create a feature branch
3. Add your tests
4. Run existing tests to ensure nothing breaks
5. Submit a pull request

## License

ISC License
